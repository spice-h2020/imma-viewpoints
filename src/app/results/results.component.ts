import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Response } from '../response';
import { Artwork } from '../artworks';
import { ResponseService } from '../response.service';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  artworks: Artwork[] = [];
  allResponses = [];
  randomResponses: Response[] = [];
  artworkResponsesObj: {} = {};
  artworkResponsesArr = [];
  responsesLoading = false;
  randomCommentCount = 5;
  recentArtworkCount = 3;
  artworkMaxResponses = 0;
  artworksLoading = false;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private responseService: ResponseService,
              private artworksService: ArtworkService) { }

  ngOnInit(): void {
    this.responsesLoading = false;
    this.artworksLoading = false;
    this.getArtworks();
  }

  getArtworks(): void {
    this.artworksLoading = true;
    this.artworksService.getArtworks()
      .subscribe(artworks => {
        this.artworks = artworks;
        this.artworksLoading = false;
        this.getResponses();
      });
  }

  getArtworkTitle(id: string): string {
    let title = '';
    for (let i = 0; i < this.artworks.length; i++) {
      if (this.artworks[i]._id === id) {
        title = this.artworks[i].name;
      }
    }
    return title;
  }

  getArtworkImage(id: string): string {
    let image = '';
    for (let i = 0; i < this.artworks.length; i++) {
      if (this.artworks[i]._id === id) {
        image = this.artworks[i].image;
      }
    }
    return image;
  }

  addTitlesAndImages(): void {
    for (let i = 0; i < this.allResponses.length; i++) {
      this.allResponses[i].artworkName = this.getArtworkTitle(this.allResponses[i].artworkID);
      this.allResponses[i].artworkImage = this.getArtworkImage(this.allResponses[i].artworkID);
    }
  }

  getResponses(): void {
    this.responsesLoading = true;
    this.responseService.getApprovedResponses()
      .subscribe( responses => {
        this.allResponses = responses;
        this.allResponses.sort((a, b) => (b.datetimeSubmitted - a.datetimeSubmitted));
        this.addTitlesAndImages();
        this.generateRandomResponseList();
        this.generateArtworkResponseList();
        this.responsesLoading = false;
        // console.log(this.artworkResponsesObj);
      });
  }

  generateRandomResponseList(): void {
    let index;
    let indexList = [];
    this.randomResponses = [];
    for (let i = 0; i < this.randomCommentCount; i++) {
      index = Math.floor(Math.random() * this.allResponses.length);
      while (indexList.includes(index)) {
        index = Math.floor(Math.random() * this.allResponses.length);
      }
      indexList.push(index);
      this.randomResponses.push(this.allResponses[index]);
    }
  }

  generateArtworkResponseList(): void {
    let currentResponse: Response;
    let currentArtworkID: string;
    this.artworkResponsesObj = {};
    this.artworkResponsesArr = [];
    for (let i = 0; i < this.allResponses.length; i++) {
      currentResponse = this.allResponses[i];
      currentArtworkID = currentResponse.artworkID;
      if (currentArtworkID in this.artworkResponsesObj) {
        this.artworkResponsesObj[currentArtworkID].push(currentResponse);
      }
      else {
        this.artworkResponsesObj[currentArtworkID] = [];
        this.artworkResponsesObj[currentArtworkID].push(currentResponse);
      }
    }
    for (let item in this.artworkResponsesObj) {
      this.artworkResponsesArr.push(this.artworkResponsesObj[item]);
      if (this.artworkResponsesObj[item].length > this.artworkMaxResponses) {
        this.artworkMaxResponses = this.artworkResponsesObj[item].length;
      }
    }
    this.artworkResponsesArr.sort(function (a, b) {
      return b.length - a.length;
    });
  }


}

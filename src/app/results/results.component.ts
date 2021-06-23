import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Response } from '../response';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  allResponses: Response[] = [];
  randomResponses: Response[] = [];
  artworkResponsesObj: {} = {};
  artworkResponsesArr = [];
  responsesLoaded = false;
  randomCommentCount = 5;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private responseService: ResponseService) { }

  ngOnInit(): void {
    this.responsesLoaded = false;
    this.getResponses();
  }

  getResponses(): void {
    this.responseService.getApprovedResponses()
      .subscribe( responses => {
        this.allResponses = responses;
        this.generateRandomResponseList();
        this.generateArtworkResponseList();
        this.responsesLoaded = true;
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
    }
    this.artworkResponsesArr.sort(function (a, b) {
      return b.length - a.length;
    });
  }


}

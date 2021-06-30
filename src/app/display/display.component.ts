import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

import { Response } from '../response';
import { Artwork } from '../artworks';
import { ResponseService } from '../response.service';
import { ArtworkService } from '../artwork.service';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayComponent extends ResultsComponent {
  artworks: Artwork[] = [];
  allResponses = [];
  randomResponses: Response[] = [];
  artworkResponsesObj: {} = {};
  artworkResponsesArr = [];
  responsesLoading = false;
  randomCommentCount = 5;
  recentArtworkCount = 2;
  artworkMaxResponses = 0;
  artworksLoading = false;
  substringLength = 180;


  constructor(route: ActivatedRoute,
              location: Location,
              responseService: ResponseService,
              artworksService: ArtworkService) {
    super(route, location, responseService, artworksService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}

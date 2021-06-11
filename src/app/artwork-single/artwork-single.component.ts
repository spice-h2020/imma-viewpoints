import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Artwork } from '../artworks';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-single',
  templateUrl: './artwork-single.component.html',
  styleUrls: ['./artwork-single.component.css']
})
export class ArtworkSingleComponent implements OnInit {
  artwork: Artwork;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArtwork();
  }

  getArtwork(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artworkService.getArtwork(id)
      .subscribe(artwork => this.artwork = artwork[0]);
  }

  goBack(): void {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artworks';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  artworks: Artwork[] = [];
  artworksLoaded: boolean;

  constructor(private artworksService: ArtworkService) { }

  ngOnInit(): void {
    this.artworksLoaded = false;
    this.getArtworks();
  }

  getArtworks(): void {
    this.artworksService.getArtworks()
      .subscribe(artworks => {
        this.artworks = artworks;
        this.artworksLoaded = true;
      });
  }

}

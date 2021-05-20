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

  constructor(private artworksService: ArtworkService) { }

  ngOnInit(): void {
    this.getArtworks();
  }

  getArtworks(): void {
    this.artworks = this.artworksService.getArtworks();
  }

}

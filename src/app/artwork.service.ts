import { Injectable } from '@angular/core';

import { Artwork } from './artworks';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor() { }

  private static generateDummyArtworks(): Artwork[] {
    const artworks: Artwork[] = [
      {
        id: 1001,
        name: 'Screaming',
        artist: 'Dave',
        date: new Date(),
        description: 'This is a crazy painting'
      },
      {
        id: 1002,
        name: 'Sleeping',
        artist: 'Bob',
        date: new Date(),
        description: 'This is a calm painting'
      },
      {
        id: 1003,
        name: 'Running',
        artist: 'Peter',
        date: new Date(),
        description: 'This is a fast, action-packed painting'
      }
    ];
    return artworks;

  }

  getArtworks(): Artwork[] {
    return ArtworkService.generateDummyArtworks();
  }
}

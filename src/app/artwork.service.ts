import { Injectable } from '@angular/core';

import { Artwork } from './artworks';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor() { }

  private generateDummyArtworks(): Artwork[] {
    const artworks: Artwork[] = [
      {
        id: 1001,
        name: '8 Limestones',
        artist: 'Ulrich Rückriem',
        date: new Date(),
        description: 'This is a crazy painting',
        imageLoc: './assets/img/img1.jpg'
      },
      {
        id: 1002,
        name: '217 5° Arc x 12',
        artist: 'Benar Venet',
        date: new Date(),
        description: 'This is a calm painting',
        imageLoc: './assets/img/img2.jpg'
      },
      {
        id: 1003,
        name: 'Barrel',
        artist: 'Fergus Martin',
        date: new Date(),
        description: 'This is a fast, action-packed painting',
        imageLoc: './assets/img/img3.jpg'
      },
      {
        id: 1004,
        name: 'The Drummer',
        artist: 'Barry Flanagan',
        date: new Date(),
        description: 'This is a fast, action-packed painting',
        imageLoc: './assets/img/img4.jpg'
      }
    ];
    return artworks;

  }

  getArtworks(): Artwork[] {
    return this.generateDummyArtworks();
  }

  getArtwork(id: number): Artwork {
    const artworksArray: Artwork[] = this.generateDummyArtworks();
    let artworkFound: Artwork = null;
    artworksArray.forEach( (element) => {
      if (element.id === id) {
        artworkFound = element;
      }
    });
    return artworkFound;
  }
}

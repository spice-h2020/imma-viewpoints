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
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img1.jpg'
      },
      {
        id: 1002,
        name: '217 5° Arc x 12',
        artist: 'Benar Venet',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img2.jpg'
      },
      {
        id: 1003,
        name: 'Barrel',
        artist: 'Fergus Martin',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img3.jpg'
      },
      {
        id: 1004,
        name: 'The Drummer',
        artist: 'Barry Flanagan',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

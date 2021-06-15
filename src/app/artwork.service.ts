import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Artwork } from './artworks';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private apiUrl = 'http://covid.local/imma_api/test.php';

  constructor(private http: HttpClient) { }

  private generateDummyArtworks(): Artwork[] {
    const artworks: Artwork[] = [
      {
        _id: '1001',
        name: '8 Limestones',
        artist: 'Ulrich Rückriem',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img1.jpg'
      },
      {
        _id: '1002',
        name: '217 5° Arc x 12',
        artist: 'Benar Venet',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img2.jpg'
      },
      {
        _id: '1003',
        name: 'Barrel',
        artist: 'Fergus Martin',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img3.jpg'
      },
      {
        _id: '1004',
        name: 'The Drummer',
        artist: 'Barry Flanagan',
        date: new Date(),
        description: 'Artwork description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageLoc: './assets/img/img4.jpg'
      }
    ];
    return artworks;

  }

  getArtworks(): Observable<Artwork[]> {
    const artworksPath = '?action=artworklist';
    return this.http.get<Artwork[]>(this.apiUrl + artworksPath);
  }

  getArtwork(id: string): Observable<Artwork> {
    /*
    const artworksArray: Artwork[] = this.generateDummyArtworks();
    let artworkFound: Artwork = null;
    artworksArray.forEach( (element) => {
      if (element.id === id) {
        artworkFound = element;
      }
    });
    return artworkFound;
    */
    const artworksPath = '?action=artworkdetails&id=' + id;
    return this.http.get<Artwork>(this.apiUrl + artworksPath);
  }
}

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

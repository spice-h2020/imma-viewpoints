import {Injectable, NgModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Artwork } from './artworks';
import { Observable } from 'rxjs';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private apiUrl = 'https://spice.kmi.open.ac.uk/demos/imma_api/main.php';

  constructor(
    private http: HttpClient
  ) { }

  getArtworks(): Observable<Artwork[]> {
    const artworksPath = '?action=artworklist';
    // console.log('from config: ' + this.config.apiURL);
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

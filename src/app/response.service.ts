import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from './response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private apiUrl = 'http://covid.local/imma_api/response.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  saveResponse(response: Response): Observable<any> {
    return this.http.post(this.apiUrl, response, this.httpOptions);
  }

  getResponse(id: number): void {
    // nothing here yet
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from './response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private submissionUrl = 'https://spice.kmi.open.ac.uk/demos/imma_api/response.php';
  private apiUrl = 'https://spice.kmi.open.ac.uk/demos/imma_api/main.php';
  // private submissionUrl = 'http://covid.local/imma_api/response.php';
  // private apiUrl = 'http://covid.local/imma_api/main.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  saveResponse(response: Response): Observable<any> {
    return this.http.post(this.submissionUrl, response, this.httpOptions);
  }

  getResponse(id: number): void {
    // nothing here yet
  }

  getApprovedResponses(): Observable<Response[]> {
    const filterParam = '?action=approvedResponses';
    const path = '/main.php' + filterParam;
    return this.http.get<Response[]>(this.apiUrl + path, this.httpOptions);
  }
}

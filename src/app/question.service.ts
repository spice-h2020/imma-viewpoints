import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question } from './question';
import {Artwork} from './artworks';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://covid.local/imma_api/main.php';

  constructor(private http: HttpClient) { }

  /*
  getQuestions(): Question[] {
    return this.generateDummyQuestions();
  }
  */


  getQuestions(): Observable<Question[]> {
    const questionsPath = '?action=questionlist';
    return this.http.get<Question[]>(this.apiUrl + questionsPath);
  }

}

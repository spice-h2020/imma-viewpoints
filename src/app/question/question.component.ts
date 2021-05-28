import {Component, Input, OnInit} from '@angular/core';

import { Question } from '../question';
import { Response } from '../response';
import { Artwork } from '../artworks';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() artwork?: Artwork;
  question: Question;
  response: Response;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  initialiseResponse(): void {
    this.response = {
      questionID: this.question.id,
      questionAsked: this.question.question,
      artworkID: this.artwork.id,
      response: '',
      datetimeSubmitted: new Date()
    };
  }

  getQuestion(): void {
    this.question = this.questionService.getRandomQuestion();
  }

}

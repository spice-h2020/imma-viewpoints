import {Component, Input, OnInit} from '@angular/core';

import { Question } from '../question';
import { Response } from '../response';
import { Artwork } from '../artworks';
import { QuestionService } from '../question.service';
import { ResponseService } from '../response.service';

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
    private questionService: QuestionService,
    private responseService: ResponseService,
  ) { }

  ngOnInit(): void {
    this.getQuestion();
    this.initialiseResponse();
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

  saveResponse(): void {
    this.responseService.saveResponse(this.response);
  }

  getQuestion(): void {
    this.question = this.questionService.getRandomQuestion();
  }

}

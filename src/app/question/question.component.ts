import {Component, Input, OnInit} from '@angular/core';

import { Question } from '../question';
import { Response } from '../response';
import { Artwork } from '../artworks';
import { QuestionService } from '../question.service';
import { ResponseService } from '../response.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() artwork?: Artwork;
  question: Question;
  questions: Question[];
  response: Response;
  responseSubmitted: boolean;
  responseSubmitting: boolean = false;

  constructor(
    private questionService: QuestionService,
    private responseService: ResponseService,
  ) {

  }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  initialiseResponse(): void {
    this.response = {
      questionID: '',
      questionAsked: '',
      artworkID: '',
      response: '',
      datetimeSubmitted: new Date()
    };
  }

  saveResponse(): void {
    this.responseSubmitting = true;
    this.response.questionID = this.question._id;
    this.response.questionAsked = this.question.question;
    this.response.artworkID = this.artwork._id;
    this.response.datetimeSubmitted = new Date();
    // console.log(this.response);
    // console.log(this.artwork);
    this.responseService.saveResponse(this.response)
      .subscribe(() => {
        // alert('Thank you! Your response has been submitted');
        this.initialiseResponse();
        this.responseSubmitted = true;
        this.responseSubmitting = false;
      });
  }

  getQuestion(): void {
    this.responseSubmitting = false;
    // this.question = this.questionService.getRandomQuestion();
    const randomID = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[randomID];
    this.initialiseResponse();
    this.responseSubmitted = false;
  }

  getAllQuestions(): void {
    this.responseSubmitting = false;
    this.questionService.getQuestions()
      .subscribe(
        questions => {
          this.questions = questions;
          this.getQuestion();
          this.initialiseResponse();
          this.responseSubmitted = false;
        }


        );
  }

}

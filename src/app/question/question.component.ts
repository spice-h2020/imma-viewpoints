import {Component, Input, OnInit} from '@angular/core';

import { Question } from '../question';
import {Artwork} from '../artworks';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(): void {
    this.question = this.questionService.getRandomQuestion();
  }

}

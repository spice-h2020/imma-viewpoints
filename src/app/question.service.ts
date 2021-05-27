import { Injectable } from '@angular/core';

import { Question } from './question';
import {Artwork} from './artworks';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  private generateDummyQuestions(): Question[] {
    const questions: Question[] = [
      {
        id: 1001,
        question: 'How does this artwork make you feel?'
      },
      {
        id: 1002,
        question: 'Does this artwork remind you of anything?'
      },
      {
        id: 1003,
        question: 'How do you think a child might react to this artwork?'
      },
      {
        id: 1004,
        question: 'How do you feel this artwork might have been perceived 20 years ago?'
      },
      {
        id: 1005,
        question: 'What do you see?'
      },
      {
        id: 1006,
        question: 'How does this artwork sit alongside teh bushes and trees nearby?'
      },
      {
        id: 1007,
        question: 'If you could run your hand along the surface of the work, what texture and temperature do you imagine feeling?'
      }
    ];
    return questions;
  }

  getQuestions(): Question[] {
    return this.generateDummyQuestions();
  }

  getQuestion(id: number): Question {
    const questionsArray: Question[] = this.generateDummyQuestions();
    let questionFound: Question = null;
    if (id === 0) {
      id = Math.floor(Math.random() * (questionsArray.length));
      return questionsArray[id];
    }
    questionsArray.forEach( (element) => {
      if (element.id === id) {
        questionFound = element;
      }
    });
    return questionFound;
  }

  getRandomQuestion(): Question {
    return this.getQuestion(0);
  }
}

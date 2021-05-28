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
        question: 'What would your best friend think about this artwork?'
      },
      {
        id: 1002,
        question: 'What would people from 100 years in the future think about this artwork?'
      },
      {
        id: 1003,
        question: 'Does this artwork move you? If so, what emotions do you feel?'
      },
      {
        id: 1004,
        question: 'What colours can you see in the artwork?'
      },
      {
        id: 1005,
        question: 'What do you see?'
      },
      {
        id: 1006,
        question: 'How does this artwork sit alongside the bushes and trees nearby?'
      },
      {
        id: 1007,
        question: 'If you could run your hand along the surface of the work, what texture and temperature do you imagine feeling?'
      },
      {
        id: 1008,
        question: 'What would your younger or older self think about this artwork?'
      },
      {
        id: 1009,
        question: 'Take a look at how the light hits the sculpture. What do you notice?'
      },
      {
        id: 10010,
        question: 'Does this artwork remind you of anything?'
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

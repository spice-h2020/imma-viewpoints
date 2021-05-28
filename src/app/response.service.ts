import { Injectable } from '@angular/core';

import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  saveResponse(response: Response): void {
    const x = 4;
  }

  getResponse(id: number): Response {
    const response: Response = {
      questionID: 1001,
      artworkID: 1001,
      response: 'This is a response',
      datetimeSubmitted: new Date()
    };
    return response;
  }
}

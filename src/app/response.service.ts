import { Injectable } from '@angular/core';

import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  saveResponse(response: Response): void {
    const x = 4;
    alert ('Thank you, your response has been saved');
  }

  getResponse(id: number): void {
    // nothing here yet
  }
}

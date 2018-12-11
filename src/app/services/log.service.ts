import { Injectable } from '@angular/core';

import {Log} from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('12/5/2018 12:24:20')},
      {id: '2', text: 'Added Logins', date: new Date('12/7/2018 02:21:20')},
      {id: '3', text: 'Added bootstrap', date: new Date('12/9/2018 18:44:20')},
    ]
   }

   getLogs() {
     return this.logs;
   }
}

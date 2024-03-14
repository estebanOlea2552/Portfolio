import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageByRouterService {
  message$ = new Subject<String>();

  constructor() { }

  addMessage(message: String){
    this.message$.next(message);
  } 
}
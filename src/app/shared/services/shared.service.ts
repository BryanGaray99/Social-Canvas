import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private chatOption = new BehaviorSubject<string>(''); // Valor inicial vacío
  currentChatOption = this.chatOption.asObservable();

  constructor() { }

  changeChatOption(option: string) {
    this.chatOption.next(option);
  }
}
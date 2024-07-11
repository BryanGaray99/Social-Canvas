import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './fb-canvas.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public sendMessage(senderPhone: string, receiverPhone: string, content: string): Observable<any> {
    const createMessageDto = { senderPhone, receiverPhone, content };
    return this.http.post<any>(`${this.backendUrl}/chat/send`, createMessageDto);
  }

  public getMessages(senderPhone: string, receiverPhone: string): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${this.backendUrl}/chat/messages/${senderPhone}/${receiverPhone}`
    );
  }
}

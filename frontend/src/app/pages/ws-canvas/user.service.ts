import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './ws-canvas.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getCurrentUser(phone: string): Observable<User> {
    return this.http.get<User>(`${this.backendUrl}/users/${phone}`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.backendUrl}/users`);
  }
}

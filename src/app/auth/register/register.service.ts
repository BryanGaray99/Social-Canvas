import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any>{
    console.log(user)
    return this.http.post('http://localhost:3000/users/create', user)
  }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }
}

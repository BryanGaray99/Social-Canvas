import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  updateUser(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:3000/users/update/${id}`, data)
  }

  // getUsers(): Observable<any>{
  //   return this.http.get('http://localhost:3000/users');
  // }
}

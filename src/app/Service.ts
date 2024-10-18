import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './User';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserResponse > {
    const url = 'https://randomuser.me/api/0.8/?results=8'; // Dummy API for testing
    return this.http.get<UserResponse >(url);
  }
}

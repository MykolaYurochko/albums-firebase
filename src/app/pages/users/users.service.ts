import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  addUser(userObg): Observable<IUser> {
    return this.http.post<IUser>(this.baseUrl, JSON.stringify(userObg), this.httpOptions)
  }

  editUser(id, userObg): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/${id}`, JSON.stringify(userObg), this.httpOptions)
  }

  deleteUser(id): Observable<Object> {

    return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}

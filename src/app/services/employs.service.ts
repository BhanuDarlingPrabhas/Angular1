import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../models/user';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmploysService {

  url: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  //Adding employs
  addEmploy(user: users): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url + '/users', user, httpOptions)
  }

  //view All Employs
  viewEmploys(): Observable<any> {
    return this.http.get(this.url + '/users', { responseType: 'json' })
  }

  //Delete Employs
  deleteEmploy(id: any): Observable<any> {
    return this.http.delete(this.url + '/users/' + id, { responseType: 'json' })
  }

  //Get user by Id
  getUserById(id: any): Observable<any> {
    return this.http.get(this.url + '/users/' + id, { responseType: 'json' })
  }


  //update user
  updateUser(user: users): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    console.log(user);
    return this.http.put(this.url + '/users/' + user.id, user, httpOptions)
  }
}




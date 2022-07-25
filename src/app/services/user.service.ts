import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersDataUrl: string = "http://localhost:3000/users";

  refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  users: any[] = [
    { id: '1', name: 'Rob', age: '30', city: 'Newyork' },
    { id: '2', name: 'JC', age: '42', city: 'Denver' },
    { id: '3', name: 'Kenn', age: '56', city: 'Chicago' },
    { id: '4', name: 'Anup', age: '28', city: 'Texas' },
    { id: '5', name: 'Hani', age: '27', city: 'Dallas' }
  ];

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    // getusers() {
    // return this.users;

    // comment below code and uncomment above code  if you want to test data consistency under DataConsistency Component
    return this.httpClient.get(this.usersDataUrl);

  }

  slice() {
    this.users = this.users.slice(1);
    this.refresh.next(true);
    console.log("users from service: " + this.users)
  }

  getUser(id: any): any {
    return this.users.filter(d => d.id == id)[0];
  }
}

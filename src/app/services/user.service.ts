import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  users: any[] = [
    { id: '1', name: 'Rob', age: '30', city: 'Newyork' },
    { id: '2', name: 'JC', age: '42', city: 'Denver' },
    { id: '3', name: 'Kenn', age: '56', city: 'Chicago' },
    { id: '4', name: 'Anup', age: '28', city: 'Texas' },
    { id: '5', name: 'Hani', age: '27', city: 'Dallas' }
  ];

  constructor() { }

  getusers() {
    return this.users;
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

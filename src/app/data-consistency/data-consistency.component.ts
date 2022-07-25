import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-data-consistency',
  templateUrl: './data-consistency.component.html',
  styleUrls: ['./data-consistency.component.css']
})
export class DataConsistencyComponent implements OnInit {

  users!: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.userService.refresh.subscribe(res => {
      if (res)
        // this.users = this.userService.users;

        // comment below code and uncomment above code  if you want to test data consistency under DataConsistency Component
        this.userService.getUsers().subscribe(res => {
          this.users = res;
        })
    })
  }

  sliceData() {
    this.userService.slice();
  }

}

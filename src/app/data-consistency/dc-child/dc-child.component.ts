import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dc-child',
  templateUrl: './dc-child.component.html',
  styleUrls: ['./dc-child.component.css']
})
export class DcChildComponent implements OnInit {

  users!: any[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.userService.refresh.subscribe(res => {
      if (res)
        // this.users = this.userService.getusers();

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

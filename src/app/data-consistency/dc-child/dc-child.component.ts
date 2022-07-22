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
        this.users = this.userService.getusers();
    })
  }

  sliceData() {
    this.userService.slice();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dc-user',
  templateUrl: './dc-user.component.html',
  styleUrls: ['./dc-user.component.css']
})
export class DcUserComponent implements OnInit {
  id: any;
  user: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("User Id: " + this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(this.id);
  }

}

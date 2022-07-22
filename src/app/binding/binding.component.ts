import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  type1: any = "This is Interpolation";
  imgLocation!: string;
  checked!: boolean;
  name!: string;
  obj: any;

  constructor() { }

  ngOnInit(): void {
    this.type1 = "false";
    this.imgLocation = "https://www.w3schools.com/tags/img_girl.jpg";
    this.checked = false;

    this.name = "Angular";
    this.obj = { name: 'angular' };
  }

  handler(userName: string) {
    console.log(userName + " Clicked me..");
    this.name = "Rishi";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isRed!: boolean;
  userNames!: string[];
  name!: string;
  constructor() { }

  ngOnInit(): void {
    this.isRed = false;

    this.userNames = ["Rob", "JC", "Clair", "Kenn", "Hani"];
    this.name = "Rob";
  }

  changeColor() {
    this.isRed = !this.isRed;
    this.userNames = this.userNames.slice(1);
    this.name = "Angular";
  }

}

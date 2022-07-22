import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {

  title !: string;
  about!: string;
  date!: Date;
  userData: any;
  salary: any;
  variable: any;
  searchTerm!: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'AnGular 12@#$%';
    this.about = "Angular iS a JavaScript FRAMEWORK";
    this.date = new Date();
    this.userData = [{ id: 1, name: 'angular', city: 'newyork' }, { id: 2, name: 'JS', city: 'denver' }];
    this.salary = 10000.5912365;
    this.variable = 0.5;
  }

}

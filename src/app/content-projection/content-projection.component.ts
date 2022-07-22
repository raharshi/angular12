import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  users!: any[];
  students!: any[];
  constructor() { }

  ngOnInit(): void {
    this.users = [
      { name: 'Rob', age: '30', city: 'Newyork' },
      { name: 'JC', age: '42', city: 'Denver' },
      { name: 'Kenn', age: '56', city: 'Chicago' },
      { name: 'Anup', age: '28', city: 'Texas' },
      { name: 'Hani', age: '27', city: 'Dallas' }
    ];

    this.students = [
      { name: 'Arti', age: '30', city: 'Newyork' },
      { name: 'Tejas', age: '42', city: 'Denver' },
      { name: 'Sanjiv', age: '56', city: 'Chicago' },
    ]
  }

}

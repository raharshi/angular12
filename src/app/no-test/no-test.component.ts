import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-test',
  template: `
    <p>
      no-test works!
    </p>
  `,
  styles: [
  ]
})
export class NoTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

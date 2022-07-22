import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('childMessage') message!: string;
  @Input('userList') userNames!: string[];
  counter: number = 0;

  testVar: string = "this is from child comp";

  // @Output() notify: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  showHide!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showHide = true;
  }

  sendData() {
    // this.notify.emit("Hello!! from Child.");
    // this.showHide = !this.showHide;
    this.notify.emit(12.34);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

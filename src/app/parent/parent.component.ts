import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  parentMessage!: string;
  childMessage!: string;
  users!: string[];
  fruits!: string[];
  showMessage!: boolean;
  age!: number;

  // @ViewChild('mess') htmlTag!: ElementRef;
  @ViewChildren('mess') htmlTag!: QueryList<ElementRef>;
  @ViewChild('childComp') child!: ChildComponent;


  constructor() { }

  ngOnInit(): void {
    this.parentMessage = "Hello!! from parent.";
    this.users = ["Rob", "JC", "Clair", "Kenn", "Hani"];
    this.showMessage = true;
    console.log(" ViewChild from NgOnInit: " + this.htmlTag);
    console.log("Child Component From OnInit: " + this.child);
  }

  ngAfterViewInit(): void {
    console.log(" ViewChild  from NgAfterViewInit : " + this.htmlTag);
    this.htmlTag.forEach((child, index) => {
      if (index == 1) {
        child.nativeElement.style.color = 'green';
      }
      else
        child.nativeElement.style.color = 'red';
    });
    // this.htmlTag.nativeElement.style.background = 'red';

    console.log("Child Component: " + this.child.testVar);
  }

  getData(age: number) {
    this.age = age;
  }

  inc() {
    this.child.increment();
    // this.child.counter++;
  }

  dec() {
    this.child.decrement();
  }
}

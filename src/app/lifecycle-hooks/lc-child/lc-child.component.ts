import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-child',
  templateUrl: './lc-child.component.html',
  styleUrls: ['./lc-child.component.css']
})
export class LcChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log(" Child Constructor");
  }

  ngAfterContentChecked(): void {
    console.log(" Child AfterContentChecked");

  }
  ngAfterViewInit(): void {
    console.log(" Child AfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log(" Child AfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log(" Child OnDestroy");
  }
  ngAfterContentInit(): void {
    console.log(" Child AfterContentInit");
  }
  ngDoCheck(): void {
    console.log(" Child DoCheck");
  }
  ngOnChanges(): void {
    console.log(" Child OnChanges");
  }

  ngOnInit(): void {
    console.log(" Child OnInit");
  }
}

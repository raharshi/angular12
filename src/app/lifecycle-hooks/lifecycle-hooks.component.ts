import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  showChild!: boolean;

  constructor() {
    console.log(" Parent Constructor");
  }

  ngAfterContentChecked(): void {
    console.log(" Parent AfterContentChecked");

  }
  ngAfterViewInit(): void {
    console.log(" Parent AfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log(" Parent AfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log(" Parent OnDestroy");
  }
  ngAfterContentInit(): void {
    console.log(" Parent AfterContentInit");
  }
  ngDoCheck(): void {
    console.log(" Parent DoCheck");
  }
  ngOnChanges(): void {
    console.log(" Parent OnChanges");
  }

  ngOnInit(): void {
    console.log(" Parent OnInit");
    this.showChild = true;
  }

}

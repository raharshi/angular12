import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-cp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit {

  @Input('people') people!: any[];
  // @ContentChild('head') head!: ElementRef;
  @ContentChild('foot') foot!: ElementRef;
  @ContentChildren('head') head!: QueryList<ElementRef>;

  constructor() { }

  ngAfterContentInit(): void {
    // this.head.nativeElement.style.color = 'red';
    this.head.forEach((ch, index) => {
      if (index == 0)
        ch.nativeElement.style.color = 'red';
      else
        ch.nativeElement.style.color = 'blueviolet';

    });
    this.foot.nativeElement.style.color = 'blueviolet';
    console.log("AfterContentInit : " + this.head);
  }

  ngOnInit(): void {
    console.log("OnInit : " + this.head);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.testObs();
    // this.testObsRandom();
    // this.testSub();
    // this.testReplaySubject();
    // this.testBehaviorSubject();
    this.testAsyncSubject();
  }

  testObs() {
    let counter = 0;
    const obs = new Observable(obs => {
      setInterval(() => {
        counter++;
        obs.next(counter);
      }, 1000);
    })

    this.subscription = obs.subscribe(data => {
      console.log(data);
    })
  }

  testObsRandom() {
    const obs = new Observable(obs => {
      obs.next(Math.random());
    })

    obs.subscribe(data => {
      console.log("Obs Sub1 :" + data);
    })

    obs.subscribe(data => {
      console.log("Obs Sub2 :" + data);
    })
  }

  testSub() {
    const sub = new Subject();

    sub.subscribe(data => console.log("Subject Sub1 : " + data));
    // sub.subscribe(data => console.log("Subject Sub2 : " + data));

    sub.next(Math.random());
    sub.next(Math.random());

  }

  testBehaviorSubject() {
    const bSub = new BehaviorSubject(123);

    bSub.next(234);
    bSub.next(345);
    bSub.next(456);
    bSub.next(567);

    bSub.subscribe(data => console.log("BSubject Sub1 : " + data));
    // bSub.subscribe(data => console.log("BSubject Sub2 : " + data));

  }

  testReplaySubject() {
    const rSub = new ReplaySubject(3);

    rSub.next(234);
    rSub.next(345);
    rSub.next(234);
    rSub.next(345);
    rSub.next(234);
    rSub.next(345);
    rSub.next(234);
    rSub.next(345);

    rSub.subscribe(data => console.log("RSubject Sub1 : " + data));
    // rSub.subscribe(data => console.log("RSubject Sub2 : " + data));


  }

  testAsyncSubject() {
    const aSub = new AsyncSubject();
    aSub.next(123);
    aSub.next(345);
    aSub.next(456);
    aSub.next(567);
    aSub.next(678);

    aSub.subscribe(data => console.log("ASubject Sub1 : " + data));

    aSub.complete();


  }

  ngOnDestroy(): void {
    console.log("child component is destroyed..");
    if (this.subscription != null && this.subscription != undefined)
      this.subscription.unsubscribe();
  }

}

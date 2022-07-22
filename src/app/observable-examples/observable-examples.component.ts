import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-examples',
  templateUrl: './observable-examples.component.html',
  styleUrls: ['./observable-examples.component.css']
})
export class ObservableExamplesComponent implements OnInit {

  showChild!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showChild = true;
    // this.testPromise();
    // this.testObservable();
  }

  testPromise() {
    console.log("Testing Promise...");
    const prom = new Promise(resolve => {
      console.log("Promise Creation..")
      setTimeout(() => {
        resolve("This is Promise Data");
        resolve("This is Promise Data1");
        resolve("This is Promise Data2");
        resolve("This is Promise Data3");
      }, 1000);
    });

    prom.then(data => {
      console.log(data);
    })
  }

  testObservable() {
    console.log("Testing Observable..");
    const obs = new Observable(obs => {
      console.log("Observable Creation...");
      setTimeout(() => {
        obs.next("This is Obs Data");
        obs.next("This is Obs Data1");
        obs.next("This is Obs Data2");
        obs.next("This is Obs Data3");
      }, 1000)
    });

    // obs.subscribe(data => {
    //   console.log(data);
    // })

    obs.pipe(filter(value => value == "This is Obs Data2")).subscribe(data => {
      console.log(data);
    })
  }

}

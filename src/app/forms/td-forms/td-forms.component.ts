import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent implements OnInit {

  disable: boolean = false;
  user: any = { address: {} };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(rForm: NgForm) {
    if (!rForm.valid) {
      console.log(rForm.errors)
    } else {
      // save
    }
    console.log(rForm.value);
  }

  resetForm(rForm: NgForm) {
    console.log(rForm.value);
    rForm.reset();
    console.log(rForm.value);
  }
}

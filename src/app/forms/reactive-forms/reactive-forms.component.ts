import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit, Validator {

  registerForm!: FormGroup;
  user: any;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return { city: 'invalid city', hello: 'hello city' };
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get address1() {
    return this.registerForm.get('address1');
  }

  get address2() {
    return this.registerForm.get('address2');
  }

  get city() {
    return this.registerForm.get('city');
  }

  get state() {
    return this.registerForm.get('state');
  }

  get postalCode() {
    return this.registerForm.get('postalCode');
  }

  get email() {
    return this.registerForm.get('email');
  }

  ngOnInit(): void {
    this.user = { firstname: 'test', email: 'test@test.com', lastname: 'test', address1: 'test', address2: 'test', city: 'test', state: 'test', postalCode: 'test', }

    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address1: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      address2: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      city: new FormControl('', this.validate),
      state: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required)
    });

    if (this.user != null) {
      this.registerForm.patchValue(this.user);
      // this.registerForm.get('email')?.setValue(this.user.email);
      this.registerForm.patchValue({ firstname: this.user.firstname, email: this.user.email, postalCode: this.user.postalCode });
      this.registerForm.get('lastname')?.reset();
    }
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  resetForm() {
    console.log(this.registerForm.value);
    this.registerForm.reset({ firstname: this.user.firstname, email: this.user.email, postalCode: this.user.postalCode });
    console.log(this.registerForm.value);
  }
}

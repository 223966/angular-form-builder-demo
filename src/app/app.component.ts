import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../app/validators/confirmed-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }

  get lf() {
    return this.loginForm.controls;
  }

  get email() {
    return this.lf.email;
  }

  get password() {
    return this.lf.password;
  }

  get confirmPassword() {
    return this.lf.confirmPassword;
  }

  submit() {
    // send this.loginForm.value to API
    console.log(this.loginForm.value);
  }

}

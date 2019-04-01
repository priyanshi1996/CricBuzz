import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from '../PasswordValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        name:['',[Validators.required, Validators.minLength(3)]],
        email:['',[Validators.required,Validators.maxLength(30)]],
        password:[''],
        confirmPassword:['']
      },{validator:PasswordValidator}
    );
  }
  get name(){
    return this.signupForm.get('name');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get confirmPassword(){
    return this.signupForm.get('confirmPassword');
  }

}

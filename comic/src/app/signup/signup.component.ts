import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerUser = this.formBuilder.group({
    "email":["", [Validators.required, Validators.email]],
    "name":["", [Validators.required]],
    "password":["", [Validators.required, Validators.minLength(8)]]
  })

  get formRegister(){
    return this.registerUser.controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerUser.value)

  }
}

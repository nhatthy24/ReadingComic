import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../model/user";
import {UserService} from "../service/user/user.service";
import {error} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = new User();

  constructor(private formBuilder: FormBuilder, private userService:UserService,
              private router: Router) { }

  infoUser = this.formBuilder.group({
    "email":["",[Validators.required, Validators.email]],
    "password":["",[Validators.required]]
  })
  get form(){
    return this.infoUser.controls
  }
  ngOnInit(): void {
  }

  // onSubmit() {
  //   console.log(this.infoUser.value)
  // }

  userLogin(){
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe(data=>{
      alert("login successful");
    },error => alert("Sorry please enter correct"))
  }
  // async userLogin(){
  //   if(this.validate()){
  //     this.userService.loginUser(this.user).subscribe(data=> {
  //       console.log(this.user)
  //       alert("Login success");
  //       let value = data as {userId: string, token: string};
  //
  //       localStorage.setItem('token', value.token);
  //       this.router.navigate(['/']);
  //     }, error =>{
  //       alert("Login fail");
  //     })
  //   }
  // }
  private validate() {
    return false;
  }
}




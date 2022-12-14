import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router} from '@angular/router';
import { Login } from '../login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loggedin:boolean=false;
  model: Login={userid:"admin",password:"admin"};
  message: string;
  returnUrl: string;

  constructor(private fb: FormBuilder, private data:DataService, private router :Router,private authService:AuthService) { 
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    });
    this.returnUrl='/dashboard';
    this.authService.logout();
  }

  ngOnInit(): void {
    //console.log("i am called");
    
  }

  // login(): void{
  //   console.log(this.loginForm);
  //   if(this.loginForm.value.email=="admin@gmail.com" && this.loginForm.value.password=="admin")
  //   {
  //     this.loggedin=true;
  //     this.data.loggedData(this.loggedin);
  //     console.log("hello",this.loggedin);
  //   }
  // }

  // click(): void {
  //   this.loggedin=false;

  // }
  login(){
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.loginForm.value.email==this.model.userid && this.loginForm.value.password==this.model.password){
        console.log("Login Successful");
        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token',this.loginForm.value.email);
        this.router.navigate([this.returnUrl]);
      }

      else{
        this.message="Please check your email and password";
      }
    }
  }


  

}

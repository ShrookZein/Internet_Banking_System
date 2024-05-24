import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem("accessToken") !==null){
      _Router.navigate(["/home"])
    }
  }
  isLoading:boolean=false;
  apiError:string='';
  loginForm:FormGroup=new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()])[^\s]{1,20}(?=.*[A-Za-z]).*$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(/^[A-Z][a-z0-9]{8,20}/)]),
  });
  handleLogin(loginForm:FormGroup){
    this.isLoading=true;
    if(loginForm.valid)
    {
      this._AuthService.login(loginForm.value).subscribe({
        
        next:(res)=>{
          console.log(res)
          if(res){
            localStorage.setItem("accessToken",res.accessToken);
            this._AuthService.decodedUserData();
            this.isLoading=false;
            
            if(res.user.roles[0].name == "admin"){
              localStorage.setItem("namtionIDAdmin",res.user.nationalId);
              
              this.isLoading=false;
              this._Router.navigate(['home'])
            }else{
              localStorage.setItem("namtionIDUser",res.user.nationalId);
              this.isLoading=false;
              this._Router.navigate(['user'])
            }
          }
          
        },
        error:(err)=>{
          this.isLoading=false;
          // this.apiError=err.error.errors.msg;
        
      }
      })
    }
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem("accessToken") !==null){
      _Router.navigate(["/home"])
    }
  }
  isLoading:boolean=false;
  apiError:string='';
  registerForm:FormGroup=new FormGroup({
    fullName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern(/^(?!\s)[A-Za-z\s]+(?<!\s)$/)]),
    nationalId:new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.pattern(/^(?=\d{1,14}$)(?=[^\W_]+$)(?=\d+$)(?=\S+$).+$/)]),
    userName:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()])[^\s]{1,20}(?=.*[A-Za-z]).*$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(/^[A-Z][a-z0-9]{8,20}/)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    
  });
  handleRegister(registerForm:FormGroup){
    this.isLoading=true;
    if(registerForm.valid)
    {
      console.log(registerForm.value)
      
      this._AuthService.register(registerForm.value).subscribe({
        next:(res)=>{
          
          if(res){
            this.isLoading=false;
            this._Router.navigate(['login'])
          }
        },
        error:(err)=>{
          this.isLoading=false;
          this.apiError=err.error.errors.msg;
        
      }
      })
    }
  }
}

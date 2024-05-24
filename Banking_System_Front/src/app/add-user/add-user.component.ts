import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

constructor(private _AdminService:AdminService,private _Router:Router,private _AuthService:AuthService){ }
  isLoading:boolean=false;
  apiError:string='';
  addUserForm:FormGroup=new FormGroup({
    fullName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern(/^(?!\s)[A-Za-z\s]+(?<!\s)$/)]),
    nationalId:new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.pattern(/^(?=\d{1,14}$)(?=[^\W_]+$)(?=\d+$)(?=\S+$).+$/)]),
    userName:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()])[^\s]{1,20}(?=.*[A-Za-z]).*$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(/^[A-Z][a-z0-9]{8,20}/)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    
  });
  handleAddUser(addUserForm:FormGroup){
    this.isLoading=true;
    if(addUserForm.valid)
    {
      console.log(addUserForm.value)
      this._AdminService.addUser(addUserForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res){

            // alert(res.body)
            this.isLoading=false;
            this._Router.navigate(['home/add-user'])
            if(res.statusCodeValue==200){
              alert("user add successs")
            }
          }
        },
        error:(err)=>{
          // console.log(err);
          
          this.isLoading=false;
          // this.apiError=err.error.errors.msg;
      }
      })
    }

  }
}

import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  data:any=null;
  constructor (private _AdminService:AdminService,private _Router:Router){}
  // callremoveUser(nationID:number){
  //   this._AdminService.removeUser(nationID).subscribe({
  //     next:(res)=>{this.data=res.data}
  //   })
  // }


  isLoading:boolean=false;
  apiError:string='';
  DeleteUserForm:FormGroup=new FormGroup({
    nationalId:new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.pattern(/^(?=\d{1,14}$)(?=[^\W_]+$)(?=\d+$)(?=\S+$).+$/)]),
  });
  handleDeleteUser(DeleteUserForm:FormGroup){
    this.isLoading=true;
    if(DeleteUserForm.valid)
    {
      console.log(DeleteUserForm.value)
      console.log(Number(DeleteUserForm.value.nationalId))
      this._AdminService.removeUser(Number(DeleteUserForm.value.nationalId)).subscribe({
        next:(res)=>{
          console.log(res)
        
          if(res){
            this.isLoading=false;
            this._Router.navigate(['home/delete-user'])
          }
          alert(res.body)
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

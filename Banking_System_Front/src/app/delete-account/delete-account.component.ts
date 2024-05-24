import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  data:any=null;
  constructor (private _AdminService:AdminService,private _Router:Router){}
  // callremoveUser(nationID:number){
  //   this._AdminService.removeUser(nationID).subscribe({
  //     next:(res)=>{this.data=res.data}
  //   })
  // }
  isLoading:boolean=false;
  apiError:string='';
  DeleteAccountForm:FormGroup=new FormGroup({
    accountNumber:new FormControl(null,[Validators.required]),
  });
  handleDeleteAccount(DeleteAccountForm:FormGroup){
    this.isLoading=true;
    if(DeleteAccountForm.valid)
    {
      console.log(DeleteAccountForm.value)
      console.log(Number(DeleteAccountForm.value.accountNumber))
      this._AdminService.removeAccount(Number(DeleteAccountForm.value.accountNumber)).subscribe({
        next:(res)=>{
          console.log(res)
        
          if(res){
            this.isLoading=false;
            alert("delete account success")
            this._Router.navigate(['home/delete-account'])
            
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

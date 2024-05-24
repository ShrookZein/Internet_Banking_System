import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent {
  constructor(private _AdminService:AdminService,private _Router:Router){}
  isLoading:boolean=false;
  apiError:string='';
  balance:any;
  hideBalance=false;
  ViewBalanceForm:FormGroup=new FormGroup({
    accountNumber:new FormControl(null,[Validators.required]),
  });
  handleViewBalance(ViewBalanceForm:FormGroup){
    this.isLoading=true;
    if(ViewBalanceForm.valid)
    {
      console.log(ViewBalanceForm.value)
      console.log(Number(ViewBalanceForm.value.accountNumber))
      this._AdminService.viewBalance(Number(ViewBalanceForm.value.accountNumber)).subscribe({
        next:(res)=>{
          console.log(res)
        
          if(res){
            this.balance=res.balance;
            this.isLoading=false;
            this._Router.navigate(['home/view-balance'])
          }else{
            alert("this account not found");
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

  showBalance(){
    this.hideBalance=true;
  }
  HideBalance(){
    this.hideBalance=false;
  }

}

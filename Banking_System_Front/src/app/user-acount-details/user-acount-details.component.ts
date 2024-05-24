import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-acount-details',
  templateUrl: './user-acount-details.component.html',
  styleUrls: ['./user-acount-details.component.css']
})
export class UserAcountDetailsComponent {
  AcountId:any;
  AccountDetails:any;
  transactions:any;
  balance=false;
  transactionsShow=false;

constructor(private _ActivatedRoute:ActivatedRoute,private _UserService:UserService,private _Router:Router){
  // this._Router.navigate(['/account-detailes/'+this.AcountId])
}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((prams)=>{
    this.AcountId=prams.get('id')
  })
  // this.transaction=res.transaction
  this._UserService.getAccountDetails(this.AcountId).subscribe({
    next:(res)=>this.AccountDetails=res,
    
    
  })
  this._UserService.getAccountDetails(this.AcountId).subscribe({
    next:(res)=>this.transactions=res.transaction,
    
    
  })
  // 
}

isLoading:boolean=false;
apiError:string='';
TransationForm:FormGroup=new FormGroup({
  sourceAccountNumber:new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.pattern(/^(?=\d{1,14}$)(?=[^\W_]+$)(?=\d+$)(?=\S+$).+$/)]),
  destinationAccountNumber:new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.pattern(/^(?=\d{1,14}$)(?=[^\W_]+$)(?=\d+$)(?=\S+$).+$/)]),
  amount:new FormControl(null,[Validators.required]),

});
handleTransation(TransationForm:FormGroup){
  this.isLoading=true;
  if(TransationForm.valid)
  {
    console.log(TransationForm.value)
    console.log(TransationForm.value)
    this._UserService.transform(TransationForm.value).subscribe({
      next:(res)=>{
        console.log(res)
      
        if(res){
          this.isLoading=false;
          this._Router.navigate(['user/account-detailes/'+this.AcountId])
          if(res.statusCodeValue==200){
            alert("money send success")
          }else{
            alert(res.body)
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

getBalnce(){
  this.balance=true;
}
 hideBalnce(){
  this.balance=false;
} 
getTransactions(){
  this.transactionsShow=true;
}
 hideTransactions(){
  this.transactionsShow=false;
 }

}

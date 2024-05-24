import { Component, OnInit  } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  Accounts:any[]=[];
  counter=0;
  constructor(private _UserService:UserService,private _Router:Router){
    
  }
  ngOnInit():void {
  this. _UserService.getUserAccounts().subscribe({
    next:(res)=>this.Accounts=res.accounts,
  })
  
}
reloud(id:number){
  // this._Router.navigate(['/user/account-detailes/'+id])
  window.location.assign('/user/account-detailes/'+id);
  
 }
}

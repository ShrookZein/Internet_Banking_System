import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable,BehaviorSubject} from 'rxjs';
import { HttpClient,HttpHeaders   } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userAccess=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    // if(localStorage.getItem('accessToken')!==null){
    //   let user:any=localStorage.getItem('accessToken')
    //   this.userAccess.next(user);
    // }
  }
  getUserAccounts():Observable<any>{
    let  headers:any={
      'Authorization': 'Bearer '+localStorage.getItem('accessToken')
     
      }
      let token=localStorage.getItem("namtionIDUser")
    return this._HttpClient.get(`http://localhost:8080/api/v1/user/${token}`, 
    {
      headers:headers
    })
  }
  getAccountDetails(id:number):Observable<any>{
    let  headers:any={
      'Authorization': 'Bearer '+localStorage.getItem('accessToken')
     
      }
    return this._HttpClient.get(`http://localhost:8080/api/v1/account/${id}`,
    {
      headers:headers
    })
  }
  transform(Data:object):Observable<any>
  {
   let  headers:any={
    'Authorization': 'Bearer '+localStorage.getItem('accessToken')
   
    }
    // let token=localStorage.getItem("namtionIDAdmin")
    return this._HttpClient.post('http://localhost:8080/api/v1/transfer',Data,
    { 
      headers:headers
    })
  }
}

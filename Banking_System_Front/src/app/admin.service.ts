import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders   } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // admindata:any=null;
  constructor(private _HttpClient:HttpClient,private _Router:Router){}
  addUser(adminData:object):Observable<any>
  {
   let  headers:any={
    'Authorization': 'Bearer '+localStorage.getItem('accessToken')
   
    }
    let token=localStorage.getItem("namtionIDAdmin")
    return this._HttpClient.post('http://localhost:8080/api/v1/user/'+token,adminData,
    { 
      headers:headers
    })
  }
  removeUser(nationID:number):Observable<any>{
    let  headers:any={
      'Authorization': 'Bearer '+localStorage.getItem('accessToken')
     
      }
      let token=localStorage.getItem("namtionIDAdmin")
    return this._HttpClient.delete(`http://localhost:8080/api/v1/user/${token}?nationalId=${nationID}`,
   {
      headers:headers
    })
  }
  addAccount(Data:object):Observable<any>
  {
   let  headers:any={
    'Authorization': 'Bearer '+localStorage.getItem('accessToken')
   
    }
    // let token=localStorage.getItem("namtionIDAdmin")
    return this._HttpClient.post('http://localhost:8080/api/v1/account',Data,
    { 
      headers:headers
    })
  }
  removeAccount(accountNumber:number):Observable<any>{
    let  headers:any={
      'Authorization': 'Bearer '+localStorage.getItem('accessToken')
     
      }
      // let token=localStorage.getItem("namtionIDAdmin")
    return this._HttpClient.delete(`http://localhost:8080/api/v1/account/${accountNumber}`,
   {
      headers:headers
    })
  }
  viewBalance(accountNumber:number):Observable<any>{
    let  headers:any={
      'Authorization': 'Bearer '+localStorage.getItem('accessToken')
     
      }
      // let token=localStorage.getItem("namtionIDAdmin")
    return this._HttpClient.get(`http://localhost:8080/api/v1/account/${accountNumber}`,
   {
      headers:headers
    })
  }
}
// + localStorage.getItem("namtionIDAdmin")
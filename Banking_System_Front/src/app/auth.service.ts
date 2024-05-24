import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('accessToken')!==null){
      this.decodedUserData();
    }
   }
   decodedUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem("accessToken"));
    let decodedToken:any=jwtDecode(encodedToken); 
    this.userData.next(decodedToken);
   }
   logout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("namtionIDAdmin");
    localStorage.removeItem("namtionIDUser");
    this.userData.next(null);
    this._Router.navigate(['login']);
   }
   register(userData:object):Observable<any>
    {
      return this._HttpClient.post('http://localhost:8080/api/v1/auth/signUp',userData)
    }
    login(userData:object):Observable<any>
    {
      return this._HttpClient.post('http://localhost:8080/api/v1/auth/login',userData)
    }
}

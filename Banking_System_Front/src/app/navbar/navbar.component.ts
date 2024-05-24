import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean=false;
  // showHomeLink:boolean=false;

  constructor(private _AuthService:AuthService){
    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue()!==null){
          this.isLogin=true;
          // if(localStorage.getItem('namtionIDAdmin')!==null){
          //   this.showHomeLink=true;
          // }
        }
        else
        {
          this.isLogin=false;
        }
      }
    })
    // if(_AuthService.userData !== null)
    // {
    //   this.isLogin=true;
    // }
  }
  logout(){
    this._AuthService.logout();
  }
  // showHome(){
    
  // }
}

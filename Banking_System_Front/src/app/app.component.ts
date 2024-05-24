import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route1';
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService){
    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue()!==null){
          this.isLogin=true;
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
}

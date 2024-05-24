import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { SeeMorePipe } from './see-more.pipe';
import { SearchPipe } from './search.pipe';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { UserComponent } from './user/user.component';
import { UserAcountDetailsComponent } from './user-acount-details/user-acount-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TestPipe,
    SeeMorePipe,
    SearchPipe,
    DeleteUserComponent,
    AddUserComponent,
    AddAccountComponent,
    DeleteAccountComponent,
    ViewBalanceComponent,
    UserComponent,
    UserAcountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

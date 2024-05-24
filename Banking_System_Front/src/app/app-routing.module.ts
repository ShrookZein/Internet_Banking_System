import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { UserComponent } from './user/user.component';
import { UserAcountDetailsComponent } from './user-acount-details/user-acount-details.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,
  children: [
    { path: 'add-account', component: AddAccountComponent },
    { path: 'delete-account', component: DeleteAccountComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'delete-user', component: DeleteUserComponent },
    { path: 'view-balance', component: ViewBalanceComponent },

  ]
},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserComponent,
  children: [
    { path: 'account-detailes/:id', component: UserAcountDetailsComponent },

  ]
},

  // {path:'settings',loadChildren:() => import('./settings/settings.module').then((m)=>m.SettingsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

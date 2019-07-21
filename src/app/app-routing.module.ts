import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeLayoutComponent } from './modules/home/home-layout/home-layout.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AppLayoutComponent } from './modules/shared/app-layout/app-layout.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: AppLayoutComponent, children: [
    {path: 'home', component: HomeLayoutComponent},
    {path: 'profile', component: ProfileComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

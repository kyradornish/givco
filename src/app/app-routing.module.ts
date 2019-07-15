import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeLayoutComponent } from './modules/home-layout/home-layout.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { MainContainerComponent } from './modules/main-container/main-container.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainContainerComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

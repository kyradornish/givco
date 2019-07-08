import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

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

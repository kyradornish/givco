import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeLayoutComponent } from './modules/home/home-layout/home-layout.component';
import { CounterComponent } from './modules/home/counter/counter.component';
import { OrgCardComponent } from './modules/home/org-card/org-card.component';
import { NavComponent } from './modules/shared/nav/nav.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AppLayoutComponent } from './modules/shared/app-layout/app-layout.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { RegisterComponent } from './modules/register/register.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLayoutComponent,
    CounterComponent,
    OrgCardComponent,
    NavComponent,
    ProfileComponent,
    AppLayoutComponent,
    HeaderComponent,
    RegisterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

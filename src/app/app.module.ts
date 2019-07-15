import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeLayoutComponent } from './modules/home-layout/home-layout.component';
import { CounterComponent } from './modules/counter/counter.component';
import { OrgCardComponent } from './modules/org-card/org-card.component';
import { NavComponent } from './modules/nav/nav.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { MainContainerComponent } from './modules/main-container/main-container.component';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLayoutComponent,
    CounterComponent,
    OrgCardComponent,
    NavComponent,
    ProfileComponent,
    MainContainerComponent,
    HeaderComponent,
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

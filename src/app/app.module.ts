import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from 'src/app/components/home-layout/home-layout.component';
import { CounterComponent } from './components/counter/counter.component';
import { OrgCardComponent } from './components/org-card/org-card.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

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

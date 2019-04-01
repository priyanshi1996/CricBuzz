import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpDataService } from './http-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchCalenderComponent } from './match-calender/match-calender.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationService } from './registration.service';

import { ReactiveFormsModule } from '@angular/forms';
// import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchCalenderComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpDataService, RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

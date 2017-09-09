import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RedirectService } from '../services/redirect.service';
import { HttpService } from '../services/http.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './login/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [LoginComponent, HomeComponent],
  providers: [HttpService, RedirectService]
})
export class AuthenticationModule { }

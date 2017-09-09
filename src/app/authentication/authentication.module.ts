import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    BrowserModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }

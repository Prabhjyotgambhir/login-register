import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { RedirectService } from './services/redirect.service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    AuthenticationRoutingModule
  ],
  providers: [HttpService, RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

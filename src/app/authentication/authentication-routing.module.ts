import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../authentication/login/home/home.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent, 
	children:[
	{path: 'home', component:HomeComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

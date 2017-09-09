import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectService {

  constructor(private router: Router) {}

  createPage() {
    this.router.navigateByUrl('pages/new');
  }

  listPage() {
    this.router.navigateByUrl('pages');
  }

  editPage(id) {
    this.router.navigateByUrl('pages/edit/'+id);  
  }

  viewPage(id) {
    this.router.navigateByUrl('pages/view/'+id);
  }
  redirectPage(path) {
    this.router.navigateByUrl(path);
  }

  listAccountPage() {
    this.router.navigateByUrl('admin/accounts');
  }

  createAccount() {
    this.router.navigateByUrl('admin/accounts/new');
  }

  redirectHome() {
    this.router.navigateByUrl('login/home');
  }

  redirectLogin() {
    this.router.navigateByUrl('login');
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (!this.authService.isAuth()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}

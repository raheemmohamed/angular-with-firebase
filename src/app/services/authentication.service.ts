import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: User;

  constructor(
    public firebaseAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  async loginUser(authdata) {
    this.user = {
      email: authdata.email,
      password: authdata.password
    };

    try {
      await this.firebaseAuth.auth.signInWithEmailAndPassword(
        authdata.email,
        authdata.password
      );

      this.firebaseAuth.authState.subscribe(user => {
        if (user) {
          localStorage.setItem('userDetails', JSON.stringify(user));
        } else {
          localStorage.setItem('userDetails', null);
        }
      });

      this.isAuthSuccess();
    } catch (e) {
      this.snackBar.open('Error' + e, 'close');
    }
  }

  isAuth() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    return this.user != null;
  }

  isAuthSuccess() {
    this.router.navigate(['/dashboard']);
    this.snackBar.open('You have successfully logged', 'close', {
      duration: 6000
    });
  }

  async logout() {
      await this.firebaseAuth.auth.signOut();
      localStorage.removeItem('userDetails');
      this.router.navigate(['login']);
      this.snackBar.open('You have successfully Logout', 'close', {
        duration: 4000
      });
  }
}

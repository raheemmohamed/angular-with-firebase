import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginFormbuilder: FormBuilder,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.loginFormbuilder.group({
      userEmail : ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required]]
    });
  }

  Onsubmit(submitedFormVal) {
    this.authService.loginUser({
      email: submitedFormVal.userEmail,
      password: submitedFormVal.password
    });
  }

}

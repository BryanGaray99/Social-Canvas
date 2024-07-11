import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public flagSubmit: boolean = false;
  public loginError: boolean = false;

  loginForm = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email, Validators.maxLength(100)]],
    password: ["", [Validators.required, Validators.maxLength(100)]],
  });

  constructor(
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  onSubmit(): void {
    this.flagSubmit = true;

    this.loginService.loginUser(this.loginForm.value).subscribe(data => {
      if (data?.status >= 300) {
        this.loginError = true;
      } else {
        // Almacenar el usuario logueado en el LocalStorage
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigateByUrl('MainPage');
      }
    });
  }
}

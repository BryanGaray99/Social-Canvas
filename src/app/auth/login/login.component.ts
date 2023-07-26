import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: "",
    password: "",
  });

  constructor(
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  onSubmit(): void {
    this.loginService.loginUser(this.loginForm.value).subscribe(data => {
      if(data?.status >= 300)
        console.error(data)

      this.router.navigateByUrl('MainPage')
    })
  }

}

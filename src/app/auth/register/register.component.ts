import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  users: any;

  registerForm = this.formBuilder.group({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
    birthDate: null,
    lastDateLogin: null
  });

  constructor(
    public registerService: RegisterService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  // ngOnInit() {
  //   this.registerService.getUsers().subscribe((data) => {
  //     this.users = data;
  //   });
  // }

  onSubmit(): void {
    this.registerService.createUser(this.registerForm.value).subscribe(data => {
      this.users = data;
      this.router.navigateByUrl('login')
    })
  }
}

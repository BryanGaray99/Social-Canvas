import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  flagSubmit: any;
  users: any;
  registerForm: FormGroup;

  constructor(
    public registerService: RegisterService,
    private formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(100)]],
      lastName: [null, [Validators.required, Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: [null, [Validators.required, Validators.maxLength(100)]],
      phone: [null, [Validators.required, Validators.maxLength(20)]],
      // image: [null, [Validators.maxLength(100)]],
      birthDate: null,
      lastDateLogin: null
    });
  }

  ngOnInit() {
    // this.registerService.getUsers().subscribe((data) => {
    //   this.users = data;
    // });
    this.flagSubmit = false;
  }

  onSubmit(): void {
    this.flagSubmit = true;
    if(this.registerForm.valid){
      this.registerService.createUser(this.registerForm.value).subscribe(data => {
        this.users = data;
        alert('Registro exitoso')
        this.router.navigateByUrl('login')
      })
    }
  }
}

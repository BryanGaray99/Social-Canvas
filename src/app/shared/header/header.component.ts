import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pages/ws-canvas/ws-canvas.component';
// import {RegisterService} from './register.service';
import { HeaderService } from './header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public currentUser: User | null = null; // Asegúrate de importar la interfaz User si no lo has hecho ya
  public profileImage: string = '';
  public flagSubmit: boolean = false;
  public idUser: any;
  registerForm: FormGroup;

  constructor(
    public headerervice: HeaderService,
    private formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(100)]],
      lastName: [null, [Validators.required, Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: [null, [Validators.required, Validators.maxLength(100)]],
      phone: [null, [Validators.required,Validators.maxLength(20)]],
      image: [null, [Validators.maxLength(300)]],
      birthDate: [null],
      lastDateLogin: null
    });
  }

  ngOnInit(): void {
    this.getCurrentUserFromLocalStorage(); // Llama al método para obtener los datos del usuario actual del Local Storage
  }

  private getCurrentUserFromLocalStorage(): void {
    const currentUserData = localStorage.getItem('currentUser');

    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
      this.profileImage = this.currentUser?.image ? this.currentUser?.image : `https://ui-avatars.com/api/?name=${this.currentUser?.firstName} ${this.currentUser?.lastName}`

      this.idUser = this.currentUser?.id;
      this.registerForm = this.formBuilder.group({
        firstName: [this.currentUser?.firstName, [Validators.required, Validators.maxLength(100)]],
        lastName: [this.currentUser?.lastName, [Validators.required, Validators.maxLength(100)]],
        email: [this.currentUser?.email, [Validators.required, Validators.email, Validators.maxLength(100)]],
        phone: [this.currentUser?.phone, [Validators.required,Validators.maxLength(20)]],
        // image: [this.currentUser?.image]
      });
    }
  }

  onSubmit(): void {
    this.flagSubmit = true;

    if(this.registerForm.valid){
      this.headerervice.updateUser(this.idUser, this.registerForm.value).subscribe(data => {
        const { userUpdated } = data;
        localStorage.setItem('currentUser', JSON.stringify(userUpdated));
        this.getCurrentUserFromLocalStorage();
        alert('Actualizacion de perfil exitosa')
      })
    }
  }
}

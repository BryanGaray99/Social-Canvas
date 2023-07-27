import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pages/ws-canvas/ws-canvas.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public currentUser: User | null = null; // Asegúrate de importar la interfaz User si no lo has hecho ya

  constructor() {}

  ngOnInit(): void {
    this.getCurrentUserFromLocalStorage(); // Llama al método para obtener los datos del usuario actual del Local Storage
  }

  private getCurrentUserFromLocalStorage(): void {
    const currentUserData = localStorage.getItem('currentUser');

    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }
  }
}
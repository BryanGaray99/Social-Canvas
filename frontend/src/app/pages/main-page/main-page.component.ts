import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {
  selectedChatOption: string = '';

  creators: any[] = [
    { name: 'Bryan Garay', age: 23, nationality: 'Ecuatoriana', flag: 'assets/ecuador.png', correo: "bryan.garay@uisek.edu.ec", image: 'assets/bryan.jpg' },
    { name: 'Andres Ontiveros', age: 28, nationality: 'Venezolana', flag: 'assets/venezuela.png', correo: "andres.ontiveros@uisek.edu.ec", image: 'assets/andres.jpeg' },
    { name: 'Mateo Cabrera', age: 21, nationality: 'Ecuatoriana', flag: 'assets/ecuador.png', correo: "mateo.cabrera@uisek.edu.ec", image: 'assets/mateo.png' }
  ];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentChatOption.subscribe((option: string) => {
      this.selectedChatOption = option;
    });
  }
}


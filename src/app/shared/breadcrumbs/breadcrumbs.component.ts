import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbText: string = '';
  selectedChatOption: string = '';
  chatOptionClasses: { [key: string]: string } = {
    'ws-chats': 'ws-color',
    'fb-canvas': 'fb-color',
    'ig-canvas': 'ig-color'
  };

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentChatOption.subscribe((option: string) => {
      this.setBreadcrumbText(option);
      this.selectedChatOption = option;
    });
  }

  setBreadcrumbText(option: string) {
    // Define la lógica para establecer el texto del breadcrumb según la opción seleccionada
    switch (option) {
      case 'ws-chats':
        this.breadcrumbText = 'Whatsapp Canvas';
        break;
      case 'fb-canvas':
        this.breadcrumbText = 'Messenger Canvas';
        break;
      case 'ig-canvas':
        this.breadcrumbText = 'Instagram Canvas';
        break;
      default:
        this.breadcrumbText = '';
        break;
    }
  }
}
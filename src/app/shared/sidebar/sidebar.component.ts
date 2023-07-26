import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private sharedService: SharedService) { }

  selectChatOption(option: string) {
    this.sharedService.changeChatOption(option);
  }
}

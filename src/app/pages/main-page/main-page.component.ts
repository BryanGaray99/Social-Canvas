import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {
  selectedChatOption: string = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentChatOption.subscribe((option: string) => {
      this.selectedChatOption = option;
    });
  }
}


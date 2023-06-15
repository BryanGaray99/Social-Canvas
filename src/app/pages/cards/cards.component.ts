import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() dataEntrante:any;
  constructor (){ }
  ngOnInit(): void {
    // this.image
  }
}

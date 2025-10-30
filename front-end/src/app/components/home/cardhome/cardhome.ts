import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardhome',
  imports: [],
  templateUrl: './cardhome.html',
  styleUrl: './cardhome.scss',
})
export class Cardhome {
  @Input() titulo!: string;
  @Input() texto!:string;
}

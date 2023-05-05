import { Component, Input } from '@angular/core';
import { Location } from 'src/app/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
})
export class LocationCardComponent {
  @Input()
  location!: Location;
}

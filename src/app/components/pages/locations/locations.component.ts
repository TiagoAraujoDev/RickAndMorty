import { Component, OnInit } from '@angular/core';
import { Infos } from 'src/app/infos';
import { Location } from 'src/app/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
})
export class LocationsComponent implements OnInit {
  locations!: Location[];
  infos!: Infos;

  constructor(private locationService: LocationService) {}
  ngOnInit(): void {
    this.locationService.getAllLocation().subscribe((response) => {
      this.locations = response.results;
      this.infos = response.info;
    })
  }

  handleNextPage(url: string) {
    this.locationService.getNextPage(url).subscribe((response) => {
      this.locations = response.results;
      this.infos = response.info;
      window.scrollTo(0, 0);
    });
  }

  handlePrevPage(url: string) {
    this.locationService.getPrevPage(url).subscribe((response) => {
      this.locations = response.results;
      this.infos = response.info;
      window.scrollTo(0, 0);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Character } from 'src/app/character';
import { Location } from 'src/app/location';
import { CharacterService } from 'src/app/services/character.service';
import { LocationService } from 'src/app/services/location.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
})
export class LocationDetailsComponent implements OnInit {
  location!: Location;
  residents!: Character[];

  constructor(
    private locationService: LocationService,
    private characterService: CharacterService,
    private utils: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.locationService
      .getLocation(id)
      .pipe(
        switchMap((location) => {
          const ids = this.utils.extractIds(location.residents);

          this.location = location;

          return this.characterService.getMultipleCharacters(ids);
        })
      )
      .subscribe((characters) => {
        this.residents = characters;
      });
  }
}

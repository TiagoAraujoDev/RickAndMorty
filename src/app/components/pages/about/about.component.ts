import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  numberOfCharacter!: number;
  numberOfEpisode!: number;
  numberOfLocation!: number;

  constructor(
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    const character = this.characterService.getAllCharacter();
    const episode = this.episodeService.getAllEpisode();
    const location = this.locationService.getAllLocation();

    forkJoin([character, episode, location]).subscribe(
      ([characterResponse, episodeResponse, locationResponse]) => {
        this.numberOfCharacter = characterResponse.info.count;
        this.numberOfEpisode = episodeResponse.info.count;
        this.numberOfLocation = locationResponse.info.count;
      }
    );
  }
}

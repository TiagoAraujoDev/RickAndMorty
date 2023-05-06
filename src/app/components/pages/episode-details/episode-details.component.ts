import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Character } from 'src/app/character';
import { Episode } from 'src/app/episode';
import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  episode!: Episode;
  characters!: Character[];

  constructor(
    private episodeService: EpisodeService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.episodeService
      .getEpisode(id)
      .pipe(
        switchMap((episode) => {
          const ids = this.utils.extractIds(episode.characters);

          this.episode = episode;

          return this.characterService.getMultipleCharacters(ids);
        })
      )
      .subscribe((characters) => {
        this.characters = characters;
      });
  }
}

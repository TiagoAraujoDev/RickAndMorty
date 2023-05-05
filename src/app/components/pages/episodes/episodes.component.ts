import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/episode';
import { Infos } from 'src/app/infos';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
})
export class EpisodesComponent implements OnInit {
  episodes!: Episode[];
  infos!: Infos;

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getAllEpisode().subscribe((response) => {
      this.episodes = response.results;
      this.infos = response.info;
    });
  }

  handleNextPage(url: string) {
    this.episodeService.getNextPage(url).subscribe((response) => {
      this.episodes = response.results;
      this.infos = response.info;
      window.scrollTo(0, 0);
    });
  }

  handlePrevPage(url: string) {
    this.episodeService.getPrevPage(url).subscribe((response) => {
      this.episodes = response.results;
      this.infos = response.info;
      window.scrollTo(0, 0);
    });
  }
}

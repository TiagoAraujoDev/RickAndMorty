import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/episode';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
})
export class EpisodeCardComponent {
  @Input()
  episode!: Episode;
}

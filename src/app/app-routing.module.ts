import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { EpisodesComponent } from './components/pages/episodes/episodes.component';
import { EpisodeDetailsComponent } from './components/pages/episode-details/episode-details.component';
import { LocationDetailsComponent } from './components/pages/location-details/location-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'episode/:id', component: EpisodeDetailsComponent },
  { path: 'location/:id', component: LocationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

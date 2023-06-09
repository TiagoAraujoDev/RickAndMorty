import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { EpisodesComponent } from './components/pages/episodes/episodes.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { PaginationButtonComponent } from './components/pagination-button/pagination-button.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { EpisodeDetailsComponent } from './components/pages/episode-details/episode-details.component';
import { LocationDetailsComponent } from './components/pages/location-details/location-details.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CharactersComponent,
    EpisodesComponent,
    LocationsComponent,
    PaginationButtonComponent,
    FilterFormComponent,
    LocationCardComponent,
    EpisodeCardComponent,
    EpisodeDetailsComponent,
    LocationDetailsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

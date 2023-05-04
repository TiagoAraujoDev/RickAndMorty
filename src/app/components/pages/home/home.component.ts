import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { Infos } from 'src/app/infos';

import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  characters!: Character[];
  infos!: Infos;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacter().subscribe((response) => {
      this.characters = response.results;
      this.infos = response.info;
    });
  }

  handleNextPage(url: string) {
    this.characterService.getNextPage(url).subscribe((response) => {
      this.characters = response.results;
      this.infos = response.info;
      window.scrollTo(0, 0);
    });
  }

  handlePrevPage(url: string) {
    this.characterService.getPrevPage(url).subscribe((response) => {
      this.characters = response.results;
      this.infos = response.info;
      window.scrollTo(0, 0);
    });
  }
}

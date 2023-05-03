import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';

import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  characters!: Character[];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacter().subscribe((response) => {
      this.characters = response.results;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from 'src/app/response';
import { Character } from 'src/app/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getAllCharacter(): Observable<Response<Character>> {
    const url = 'https://rickandmortyapi.com/api/character';
    return this.httpClient.get<Response<Character>>(url);
  }

  getNextPage(url: string): Observable<Response<Character>> {
    return this.httpClient.get<Response<Character>>(url);
  }

  getPrevPage(url: string): Observable<Response<Character>> {
    return this.httpClient.get<Response<Character>>(url);
  }
}

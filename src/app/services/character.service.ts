import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from 'src/app/response';
import { Character } from 'src/app/character';
import { FilterInfos } from '../filter-infos';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient) { }

  getAllCharacter(filter?: FilterInfos): Observable<Response<Character>> {
    let url;
    if (filter) {
      url = `https://rickandmortyapi.com/api/character/?name=${filter.name}&status=${filter.status}&gender=${filter.gender}`;
    } else {
      url = 'https://rickandmortyapi.com/api/character';
    }
    return this.httpClient.get<Response<Character>>(url);
  }

  getNextPage(url: string): Observable<Response<Character>> {
    return this.httpClient.get<Response<Character>>(url);
  }

  getPrevPage(url: string): Observable<Response<Character>> {
    return this.httpClient.get<Response<Character>>(url);
  }
}

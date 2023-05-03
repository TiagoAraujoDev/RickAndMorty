import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from 'src/app/response';
import { Episode } from 'src/app/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private httpClient: HttpClient) {}

  getAllEpisode(): Observable<Response<Episode>> {
    const url = 'https://rickandmortyapi.com/api/episode';
    return this.httpClient.get<Response<Episode>>(url);
  }
}

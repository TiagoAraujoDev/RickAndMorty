import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from 'src/app/response';
import { Location } from 'src/app/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  getAllLocation(): Observable<Response<Location>> {
    const url = 'https://rickandmortyapi.com/api/location';
    return this.httpClient.get<Response<Location>>(url);
  }

  getLocation(id: number): Observable<Location> {
    const url = `https://rickandmortyapi.com/api/location/${id}`;
    return this.httpClient.get<Location>(url);
  }

  getNextPage(url: string): Observable<Response<Location>> {
    return this.httpClient.get<Response<Location>>(url);
  }

  getPrevPage(url: string): Observable<Response<Location>> {
    return this.httpClient.get<Response<Location>>(url);
  }
}

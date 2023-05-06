import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  extractIds(urls: string[]): number[] {
    const idsArray = [];

    for (let url of urls) {
      const urlSplit = url.split('/');
      idsArray.push(Number(urlSplit[urlSplit.length - 1]));
    }

    console.log(idsArray);

    return idsArray;
  }
}

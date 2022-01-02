import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatNinjaService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUrl = "https://catfact.ninja/fact";
  getKittens () {
    return this.http.get(this.fetchUrl);
  }

}

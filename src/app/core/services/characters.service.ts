import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {

  LIMIT = 10

  PUBLIC_KEY = 'cce4237dc02073fba69789cb4aed5be3';

  HASH = '66874614563d454ab9159e1f6192a972';

  URL_API = `https://gateway.marvel.com/v1/public/characters?orderBy=name&ts=1&limit=10&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  

constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.data.results));
  }
  filterAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.data.results))
    
  }
}

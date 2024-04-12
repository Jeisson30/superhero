  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Superhero } from './superhero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService {

  private baseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

  constructor(private http: HttpClient) { }

  searchHeroesByName(name: string): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.baseUrl}/search/${name}.json`);
  }
}

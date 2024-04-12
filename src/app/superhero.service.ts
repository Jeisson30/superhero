import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Superhero } from './superhero.model';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  searchHeroesByName(searchTerm: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

  constructor(private http: HttpClient) { }

  getAllSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.baseUrl}/all.json`);
  }

  getSuperheroById(id: number): Observable<Superhero> {
    return this.http.get<Superhero>(`${this.baseUrl}/id/${id}.json`);
  }
}

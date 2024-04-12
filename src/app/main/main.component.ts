import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../superhero.service';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  heroes: Superhero[] = [];
  searchTerm: string = '';

  constructor(private superheroService: SuperheroService) { }

  ngOnInit(): void {
    this.superheroService.getAllSuperheroes().subscribe(
      (heroes: Superhero[]) => {
        this.heroes = this.getRandomHeroes(heroes);
      }
    );
  }

  private getRandomHeroes(heroes: Superhero[]): Superhero[] {
    const randomHeroes = [];
    const totalHeroes = heroes.length;
    const selectedIndexes = new Set<number>();

    while (randomHeroes.length < 20) {
      const randomIndex = Math.floor(Math.random() * totalHeroes);
      if (!selectedIndexes.has(randomIndex)) {
        selectedIndexes.add(randomIndex);
        randomHeroes.push(heroes[randomIndex]);
      }
    }

    return randomHeroes;
  }

  searchHeroes(): void {
    if (this.searchTerm.trim() === '') {
      this.superheroService.getAllSuperheroes().subscribe(
        (heroes: Superhero[]) => {
          this.heroes = this.getRandomHeroes(heroes);
        }
      );
    } else {
      this.superheroService.getAllSuperheroes().subscribe(
        (heroes: Superhero[]) => {
          this.heroes = heroes.filter(hero => hero.name?.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
      );
    }
  }
  showRandomHeroes(): void {
    this.superheroService.getAllSuperheroes().subscribe(
      (heroes: Superhero[]) => {
        this.heroes = this.getRandomHeroes(heroes);
      }
    );
  }
}

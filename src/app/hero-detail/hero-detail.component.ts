import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroService } from '../superhero.service';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Superhero | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private superheroService: SuperheroService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.superheroService.getSuperheroById(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

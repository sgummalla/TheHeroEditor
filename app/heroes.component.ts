import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './model/Hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './templates/my-heroes.html',
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then((_heroes: any) => {
            this.heroes = _heroes;
        });
    }

    onSelect(_hero: Hero): void {
        this.selectedHero = _hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
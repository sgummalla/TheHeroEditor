import {Component, OnInit} from '@angular/core';
import { Hero } from './model/hero';
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './templates/my-dashboard.html',
    styleUrls: ['dashboard.component.css']
})
export class DashBoardComponent implements OnInit {
    topHeroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then((heroes: Hero[]) => this.topHeroes = heroes.slice(1, 5));
    }
}
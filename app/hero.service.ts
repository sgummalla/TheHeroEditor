import { Injectable } from '@angular/core';
import { Hero } from './model/Hero';
import { HEROES } from './mock-data/heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>((resolve, reject) => {
            setTimeout(function () {
                resolve(HEROES);
            }, 2000); // delay 2 seconds
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then((heroes: Hero[]) => {
                return heroes.find((hero: Hero) => {
                    return hero.id === id;
                });
            });
    }
}
import {Component, Input} from '@angular/core';
import {Hero} from './model/Hero';

@Component({
    selector : 'my-hero-detail',
    templateUrl : './templates/my-hero-detail.html'
})
export class HeroDetailComponent{
    @Input()
    hero : Hero;
}
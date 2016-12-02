import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
    },
    {
        path:'dashboard',
        component : DashBoardComponent
    },
    {
        path:'heroes',
        component : HeroesComponent
    },
    {
        path : 'detail/:id',
        component : HeroDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}
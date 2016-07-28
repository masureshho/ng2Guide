import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
  styleUrls:['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../../../../hero';
import { HeroService } from '../../../../hero.service';
import { Store } from '@ngrx/store';

import { AppState } from './../../../../state-manegment/app.reducers';
import { LoadHeroesRequesAction } from '../../../../state-manegment/stores';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private store: Store<AppState>
  ) {
    this.heroes$ = store.select(state => state.heroes.heroes);
  }


  ngOnInit() {
    this.getHeroes();
    this.store.dispatch(new LoadHeroesRequesAction());
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        console.log(hero);

        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

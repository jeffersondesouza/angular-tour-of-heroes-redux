import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {
  LoadHeroesRequesAction,
  DeleteHeroRequestAction,
  HeroesStoreSelectors,
  RootStoreState
} from '../../../state-manegment';

import { Hero } from './../../../hero';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  isDeletingHero$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  heroes: Hero[];

  constructor(
    private store: Store<RootStoreState.AppState>
  ) {
    this.heroes$ = store.select(HeroesStoreSelectors.selectAllHeroes);
    this.isDeletingHero$ = store.select(state => state.heroes.isDeletingHero);
    this.isLoading$ = store.select(state => state.heroes.isLoading);
  }

  ngOnInit() {
    this.store.dispatch(new LoadHeroesRequesAction());
  }

  onAddHero(name: string): void {
    console.log(name);
  }

  onDeleteHero(hero: Hero): void {
    console.log(hero);
    this.store.dispatch(new DeleteHeroRequestAction(hero));

  }
}

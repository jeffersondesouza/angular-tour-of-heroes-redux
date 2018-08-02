import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../hero';

import {
  RootStoreState,
  HeroesStoreSelectors,
  LoadHeroesRequesAction
} from '../../../../state-manegment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  heroes$;
  isLoading$;

  constructor(
    private store: Store<RootStoreState.AppState>
  ) {
    this.heroes$ = store.select(HeroesStoreSelectors.selectFirstsHeroes);
    this.isLoading$ = store.select(state => state.heroes.isLoading);
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(new LoadHeroesRequesAction());
  }

  private selectFirstsHeroes(heroes) {
    return heroes.slice(1, 5);
  }
}

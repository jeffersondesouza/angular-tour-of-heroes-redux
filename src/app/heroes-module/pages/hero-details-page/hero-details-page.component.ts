import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';

import { Hero } from './../../../hero';

import {
  RootStoreState,
  UpdateHeroRequestAction
} from '../../../state-manegment';


@Component({
  selector: 'app-hero-details-page',
  templateUrl: './hero-details-page.component.html',
  styleUrls: ['./hero-details-page.component.css']
})
export class HeroDetailsPageComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
    private location: Location,
    private store: Store<RootStoreState.AppState>
  ) { }

  ngOnInit(): void {
    this.hero$ = this.store.select('heroes').map(state => state.selectedHero);
  }

  onGoBack(): void {
    this.location.back();
  }

  onHeroSaved(heroSaved: Hero) {
    this.store.dispatch(new UpdateHeroRequestAction(heroSaved));
  }
}


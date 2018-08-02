import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';

import { Hero } from './../../../hero';

import { RootStoreState } from '../../../state-manegment';


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

  getHero(): void {
    /*
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
          .subscribe(hero => this.hero = hero); */
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    /*  this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack()); */
  }
}


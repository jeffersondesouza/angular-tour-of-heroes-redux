import { AppState } from './../../../state-manegment/app.reducers';
import { Hero } from './../../../hero';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoadHeroesRequesAction, DeleteHeroRequestAction } from '../../../state-manegment/stores';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  isDeletingHero$: Observable<boolean>;

  heroes: Hero[];

  constructor(
    private store: Store<AppState>
  ) {
    this.heroes$ = store.select(state => state.heroes.heroes);
    this.isDeletingHero$ = store.select(state => state.heroes.isDeletingHero);
  }

  ngOnInit() {
    this.store.dispatch(new LoadHeroesRequesAction());
  }

  onAddHero(name: string): void {
    console.log(name);

    /*     this.heroService.addHero({ name } as Hero)
          .subscribe(hero => {
            console.log(hero);

            this.heroes.push(hero);
          }); */
  }

  onDeleteHero(hero: Hero): void {
    console.log(hero);
    this.store.dispatch(new DeleteHeroRequestAction(hero));

    // this.heroes = this.heroes.filter(h => h !== hero);
    //  this.heroService.deleteHero(hero).subscribe();
  }
}

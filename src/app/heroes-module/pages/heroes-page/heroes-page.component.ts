import { AppState } from './../../../state-manegment/app.reducers';
import { Hero } from './../../../hero';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoadHeroesRequesAction } from '../../../state-manegment/stores';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  heroes: Hero[];

  constructor(
    private store: Store<AppState>
  ) {
    this.heroes$ = store.select(state => state.heroes.heroes);
  }


  ngOnInit() {
    this.store.dispatch(new LoadHeroesRequesAction());
  }


  onAddHero(name: string): void {
    /*     this.heroService.addHero({ name } as Hero)
          .subscribe(hero => {
            console.log(hero);

            this.heroes.push(hero);
          }); */
  }

  delete(hero: Hero): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    //  this.heroService.deleteHero(hero).subscribe();
  }
}

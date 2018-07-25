import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { LOAD_HEROES_REQUEST_ACTION, LoadHeroesSuccesAction } from './actions';
import { HeroListApiFetcherService } from './hero-list-api-fetcher.service';

@Injectable()
export class HeroListEffectsService {

  @Effect()
  loadHeroesRequest: Observable<Action> = this.actions$
    .ofType(LOAD_HEROES_REQUEST_ACTION)
    .switchMap(res => this.apiDataFetcher.getHeroes())
    .map(heroes => new LoadHeroesSuccesAction(heroes));

  constructor(
    private actions$: Actions,
    private apiDataFetcher: HeroListApiFetcherService
  ) { }

}

import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as fromHeroListAction from './actions';
import { HeroListApiFetcherService } from './hero-list-api-fetcher.service';

@Injectable()
export class HeroListEffectsService {

  @Effect()
  loadHeroesRequest: Observable<Action> = this.actions$
    .ofType(fromHeroListAction.LOAD_REQUEST_ACTION)
    .switchMap(res => this.apiDataFetcher.getHeroes())
    .map(heroes => new fromHeroListAction.LoadHeroesSuccesAction(heroes));


  @Effect()
  deleteHeroRequest: Observable<Action> = this.actions$
    .ofType(fromHeroListAction.DELETE_REQUEST_ACTION)
    .switchMap((action: fromHeroListAction.DeleteHeroRequestAction) => this.apiDataFetcher.deleteHero(action.payload))
    .map(res => new fromHeroListAction.LoadHeroesRequesAction());

  constructor(
    private actions$: Actions,
    private apiDataFetcher: HeroListApiFetcherService
  ) { }

}

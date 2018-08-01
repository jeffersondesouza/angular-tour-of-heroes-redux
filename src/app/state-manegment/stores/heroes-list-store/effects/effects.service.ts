import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import * as fromHeroListAction from './../actions';
import { HeroListApiFetcherService } from './../api-fetcher/api-fetcher.service';

@Injectable()
export class HeroListEffectsService {

  @Effect()
  loadHeroesRequest: Observable<Action> = this.actions$
    .pipe(
      ofType<fromHeroListAction.LoadHeroesRequesAction>(fromHeroListAction.LOAD_REQUEST_ACTION),
      startWith(new fromHeroListAction.LoadHeroesRequesAction()),
      switchMap(action =>
        this.apiDataFetcher.getHeroes()
          .pipe(
            map(heroes => new fromHeroListAction.LoadHeroesSuccesAction(heroes)),
            catchError(error => Observable.of(new fromHeroListAction.LoadHeroesFailureAction({ error })))
          )
      )
    );


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

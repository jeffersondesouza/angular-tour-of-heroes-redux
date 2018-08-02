import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  RootStoreState,
  LoadHeroRequesAction
} from '../../../state-manegment';

@Injectable()
export class LoadHeroResolverService implements Resolve<void> {

  constructor(
    private store: Store<RootStoreState.AppState>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.store.dispatch(new LoadHeroRequesAction(+route.paramMap.get('id')));
  }
}

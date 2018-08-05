import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeroesListStoreModule } from './stores/heroes-list-store/heroes-list-store.module';

import { HeroesStoreState } from './stores/heroes-list-store';


export interface State {
  heroes: HeroesStoreState.State;
}

@NgModule({
  imports: [
    CommonModule,
    HeroesListStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

  ],
  declarations: []
})
export class RootStoreModule { }

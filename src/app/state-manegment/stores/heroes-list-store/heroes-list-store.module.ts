import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as reducer from './reducers/reducers';
import { HeroListEffectsService } from './effects/effects.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('heroes', reducer.heroesReducer),
    EffectsModule.forFeature([HeroListEffectsService]),
  ],
  providers: [
    HeroListEffectsService
  ]
})
export class HeroesListStoreModule { }

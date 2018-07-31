import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListStoreModule } from './stores/heroes-list-store/heroes-list-store.module';

@NgModule({
  imports: [
    CommonModule,
    HeroesListStoreModule
  ],
  declarations: []
})
export class RootStoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HeroListEffectsService } from '../state-manegment/stores/heroes-list-store/effects.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    HeroListEffectsService,
  ]
})
export class CoreModule { }

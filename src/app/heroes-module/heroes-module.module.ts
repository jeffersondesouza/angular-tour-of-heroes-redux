import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesComponent } from './components/lists/heroes/heroes.component';
import { HeroesRoutingModules } from './heroes-module.routing';
import { HeroesModulePageComponent } from './pages/heroes-module-page/heroes-module-page.component';
import { AddHeroComponent } from './components/forms/add-hero/add-hero.component';
import { HeroDetailComponent } from './components/ui/hero-detail/hero-detail.component';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { HeroDetailsPageComponent } from './pages/hero-details-page/hero-details-page.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModules,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeroesModulePageComponent,
    HeroesComponent,
    AddHeroComponent,
    HeroDetailComponent,
    HeroesPageComponent,
    HeroDetailsPageComponent,
  ]
})
export class HeroesModulesModule { }

import { HeroesComponent } from './components/lists/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModules } from './heroes-module.routing';
import { HeroesModulePageComponent } from './pages/heroes-module-page/heroes-module-page.component';
import { AddHeroComponent } from './components/forms/add-hero/add-hero.component';
import { HeroDetailComponent } from './components/ui/hero-detail/hero-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ]
})
export class HeroesModulesModule { }

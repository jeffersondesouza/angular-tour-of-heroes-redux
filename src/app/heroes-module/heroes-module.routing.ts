import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModulePageComponent } from './pages/heroes-module-page/heroes-module-page.component';
import { HeroesPageComponent, HeroDetailsPageComponent } from './pages';
import { LoadHeroResolverService } from '../shared/services/load-hero-resolver/load-hero-resolver.service';

const routes: Routes = [
  {
    path: '', component: HeroesModulePageComponent,
    children: [
      { path: '', component: HeroesPageComponent },
      {
        path: ':id', component: HeroDetailsPageComponent,
        resolve: { data: LoadHeroResolverService }
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModules { }

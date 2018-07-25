import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModulePageComponent } from './pages/heroes-module-page/heroes-module-page.component';
import { HeroesPageComponent, HeroDetailsPageComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: HeroesModulePageComponent,
    children: [
      { path: '', component: HeroesPageComponent },
      { path: ':id', component: HeroDetailsPageComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModules { }

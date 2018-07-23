import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModulePageComponent } from './pages/heroes-module-page/heroes-module-page.component';
import { HeroDetailComponent } from './components/ui/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/lists/heroes/heroes.component';

const routes: Routes = [
  {
    path: '', component: HeroesModulePageComponent,
    children: [
      { path: '', component: HeroesComponent },
      { path: ':id', component: HeroDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModules { }

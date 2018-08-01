import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRootRoutesComponent } from './core/components/public-root-routes/public-root-routes.component';
import { HomeComponent } from './core/components/home/home.component';
import { PrivateRootRoutesComponent } from './core/components/private-root-routes/private-root-routes.component';

/*
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard-module/dashboard.module#DashboardModuleModule' },
  { path: 'heroes', loadChildren: 'app/heroes-module/heroes-module.module#HeroesModulesModule' },
];

 */
 const routes: Routes = [
  {
    path: '', component: PrivateRootRoutesComponent,
    children: [
      { path: 'dashboard', loadChildren: 'app/dashboard-module/dashboard.module#DashboardModuleModule' },
      { path: 'heroes', loadChildren: 'app/heroes-module/heroes-module.module#HeroesModulesModule' },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

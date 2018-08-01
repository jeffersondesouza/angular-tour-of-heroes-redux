import { HomeComponent } from './core/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  { path: 'dashboard', loadChildren: 'app/dashboard-module/dashboard.module#DashboardModuleModule' },
  { path: 'heroes', loadChildren: 'app/heroes-module/heroes-module.module#HeroesModulesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

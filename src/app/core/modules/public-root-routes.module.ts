import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* const routes: Routes = [
  {
    path: '',
    component: PublicRootRoutesComponent,
    children: [
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'welcome', component: HomeComponent },
    ]
  },
  {
    path: '',
    component: PrivateRootRoutesComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/dashboard-module/dashboard.module#DashboardModuleModule' },
      { path: 'heroes', loadChildren: 'app/heroes-module/heroes-module.module#HeroesModulesModule' },
    ]
  },
];
 */


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class PublicRootRoutesModule { }

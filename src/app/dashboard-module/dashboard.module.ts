import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardModulePageComponent } from './pages/dashboard-module-page/dashboard-module-page.component';
import { DashboardComponent } from './components/ui/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/ui/hero-search/hero-search.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardModulePageComponent,
    DashboardComponent,
    HeroSearchComponent,
  ]
})
export class DashboardModuleModule { }

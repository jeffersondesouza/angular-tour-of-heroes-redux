import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModulePageComponent } from './pages/dashboard-module-page/dashboard-module-page.component';
import { DashboardComponent } from './components/ui/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardModulePageComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

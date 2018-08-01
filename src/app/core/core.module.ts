import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

import { HeroListApiFetcherService } from '../state-manegment';
import { PublicRootRoutesComponent } from './components/public-root-routes/public-root-routes.component';
import { PrivateRootRoutesComponent } from './components/private-root-routes/private-root-routes.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavBarComponent,
    PublicRootRoutesComponent,
    PrivateRootRoutesComponent,
    HomeComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    HeroListApiFetcherService,
  ]
})
export class CoreModule { }

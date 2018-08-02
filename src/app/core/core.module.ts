import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

import { HeroListApiFetcherService } from '../state-manegment';
import { PublicRootRoutesComponent } from './components/public-root-routes/public-root-routes.component';
import { PrivateRootRoutesComponent } from './components/private-root-routes/private-root-routes.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PublicRootRoutesModule } from './modules/public-root-routes.module';
import { PrivateRootRoutesModule } from './modules/private-root-routes.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PublicRootRoutesModule,
    PrivateRootRoutesModule,
  ],
  declarations: [
    NavBarComponent,
    PublicRootRoutesComponent,
    PrivateRootRoutesComponent,
    HomeComponent,
    MessagesComponent,
    LoginComponent
  ],
  exports: [
    NavBarComponent,
    MessagesComponent
  ],
  providers: [
    HeroListApiFetcherService,
  ]
})
export class CoreModule { }

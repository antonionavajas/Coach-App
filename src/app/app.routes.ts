import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CaHomeComponent } from './sections/ca-home/ca-home.component';
import { Ca404Component } from './sections/ca-404/ca-404.component';

const appRoutes:Routes = [
  {path: '', component: CaHomeComponent},
  {path: 'home', component: CaHomeComponent},
  {path: '**', component: Ca404Component}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocksComponentComponent } from './stocks-component/stocks-component.component';



const appRoutes: Routes = [{
    path: 'stocks',
    component: StocksComponentComponent
}];


export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
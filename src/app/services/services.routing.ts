import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {path: '', component: ServicesComponent},
    {path: ':id', component: DetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';


// export const router: Routes= [
//     {path: '', redirectTo: 'about',pathMatch:'full'},
//     {path: 'about', component:AboutComponent},
//     {path: 'services', component:ServicesComponent}
// ];

const routes: Routes = [
    {path: '', redirectTo: 'about',pathMatch:'full'},
    {path: 'about', component: AboutComponent},
    {path: 'services', loadChildren:'./services/services.module#ServicesModule'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

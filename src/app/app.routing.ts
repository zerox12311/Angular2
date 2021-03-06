import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { CallcomponentComponent } from './callcomponent/callcomponent.component';
// import { ServicesComponent } from './services/services.component';


// export const router: Routes= [
//     {path: '', redirectTo: 'about',pathMatch:'full'},
//     {path: 'about', component:AboutComponent},
//     {path: 'services', component:ServicesComponent}
// ];

const routes: Routes = [
    {path: '', redirectTo: 'about',pathMatch:'full'},
    {path: 'about', component: AboutComponent},
    {path: 'services', loadChildren:'./services/services.module#ServicesModule'},
    {path: 'test', component: CallcomponentComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

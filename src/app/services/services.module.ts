import { NgModule } from '@angular/core';

import { ServicesComponent } from './services.component';
import { DetailComponent } from './detail/detail.component';

import { routing } from './services.routing';

@NgModule({
    imports:[routing],
    declarations:[ServicesComponent,DetailComponent]
})

export class ServicesModule {}

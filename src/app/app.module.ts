import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

import {TabViewModule} from 'primeng/primeng';
import { CallbacktestComponent } from './callbacktest/callbacktest.component';
import { CallcomponentComponent } from './callcomponent/callcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CallbacktestComponent,
    CallcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

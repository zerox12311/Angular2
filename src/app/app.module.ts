import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {LoginComponent} from './login/login.component';
import { NoAuthGuard } from './login/no-auth-guard.service';
import {SharedModule} from './common/shared.module';
import { ServicesComponent } from './services/services.component';
import {RouterModule} from "@angular/router";
import { UserService } from './common/service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule
  ],
  providers: [NoAuthGuard,UserService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

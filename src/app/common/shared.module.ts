
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ShowAuthedDirective} from './directive/show-authed.directive';
import {UserService} from './service/user.service';
import {TokenService} from './service/token.service';
import {HeaderComponent} from './layout/header/header.component';
import {HttpClientService} from './service/http-client.service';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations:[
    ShowAuthedDirective,
    HeaderComponent
  ],
  providers:[
    HttpClientService,
    UserService,
    TokenService
  ],
  exports:[
    HeaderComponent,
    ShowAuthedDirective
  ]
})

export class SharedModule{

}


import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ShowAuthedDirective} from './directive/show-authed.directive';
import {UserService} from './service/user.service';
import {TokenService} from './service/token.service';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations:[
    ShowAuthedDirective
  ],
  providers:[
    UserService,
    TokenService
  ],
  exports:[
    ShowAuthedDirective
  ]
})

export class SharedModule{

}


import {Component} from "@angular/core";
import {Router} from '@angular/router';

import {User} from '../common/models/user.models';
import {UserService} from '../common/service/user.service';

@Component({
  templateUrl:'login.component.html',
  styleUrls:['login.component.css']
})

export class LoginComponent{
    user : any ={username:'', password:''};
    error:string;

  constructor(
    private router:Router,
    private userService:UserService
  ){}

  login(){
    let result = this.userService.getAuth(this.user as User);
    if(result){
      this.router.navigate(['/about']);
    }
    else {
      this.error = '账号xiajinxin，密码123'
    }
  }

}

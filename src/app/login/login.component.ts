
import {Component} from "@angular/core";
import {Router} from '@angular/router';

import {User} from '../common/models/user.models';
import {UserService} from '../common/service/user.service';
import {ReplaySubject, Observable} from "rxjs";

@Component({
  templateUrl:'login.component.html',
  styleUrls:['login.component.css']
})

export class LoginComponent{
    user : any ={username:'', password:''};
    error:string;
    userObj : Observable<any>;

  constructor(
    private router:Router,
    private userService:UserService
  ){}

  login(){
    //先判斷用戶是否存在
    this.userService.getUser(this.user).subscribe(rs =>{
      console.log(JSON.parse(rs._body));
      let ref = JSON.parse(rs._body);
      if(ref.errCode == 0){
        this.userObj = ref.value;
        this.user.token = ref.token;
        let result = this.userService.getAuth(this.user as User);
        if(result){
          this.userService.getMenuTree(this.user.username).subscribe(r => {
            console.log(JSON.parse(r._body));
            this.router.navigate(['/about']);
          });
        }
        else {
          this.error = '用戶名或密碼錯誤！';
        }
      }else {
        this.error = '該用戶不存在！';
      }
    });
  }

}

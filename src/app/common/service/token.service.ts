/*
* Created by xiajinxin on 2017/2/10
* */

import {Injectable} from "@angular/core";

@Injectable()
export class TokenService{
  //取得Token值
  getToken():String{
    return window.localStorage['userToken'];
  }

  //保存Token
  saveToekn(token:String){
    window.localStorage['userToken'] = token;
  }

  //註銷Token
  destroyToken(){
    window.localStorage.removeItem('userToken');
  }


}

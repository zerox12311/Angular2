import { Injectable, Input } from "@angular/core";

import { User } from '../models/user.models';
import { ReplaySubject } from "rxjs";
import { TokenService } from './token.service';



@Injectable()
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  constructor(private tokenServcie: TokenService) { }

  //判斷是否登錄
  populate() {
    if (this.tokenServcie.getToken()) {
      this.setAuth({ username: 'xiajinxin', token: 'token-1', password: '123' } as User);
    }
    else {
      this.clearAuth();
    }
  }

  //設置登陸者
  setAuth(user: User) {
    this.tokenServcie.saveToekn(user.token);
    this.isAuthenticatedSubject.next(true);
  }

  //註銷用戶
  clearAuth() {
    this.tokenServcie.destroyToken();
    this.isAuthenticatedSubject.next(false);
  }

  //認證用戶是否有登錄過
  getAuth(user: User): boolean {
    if (user.username == 'xiajinxin' && user.password == '123') {
      user.token = 'token-' + new Date;
      localStorage.setItem('currentUser', "true");
      this.setAuth(user);
      return true;
    }
    localStorage.removeItem('currentUser');
    return false;
  }



}

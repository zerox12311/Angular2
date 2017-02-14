import { Injectable, Input } from "@angular/core";
import {Http, Response} from '@angular/http';

import { User } from '../models/user.models';
import {ReplaySubject, Observable} from "rxjs";
import {Subject} from 'rxjs/Subject';
import { TokenService } from './token.service';



@Injectable()
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  userObj : Observable<any>;
  private searchTerms = new Subject<string>();

  constructor(private tokenServcie: TokenService,
              private http :Http
      ) { }

  //判斷是否登錄
  populate(){
    console.log('token'+this.tokenServcie.getToken());
    if (this.tokenServcie.getToken()){
      console.log('aaa');
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

  getUser(user: User):Observable<any>{
    console.log('getUser');
    return this.http.post('http://localhost:51824/api/AZ/YAZI01/getToken', {userid: user.username, password: user.password})
      .map((r:Response) => r.json().data);
   // return .post(webUrl+'/api/AZ/YAZI01/getToken', {userid: userid, password: password});
  }

  //認證用戶是否有登錄過
  getAuth(user: User): boolean {
    //判斷用戶是否存在
/*    this.userObj = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
        term => term?this.getUser(user):Observable.of<any>([])
      ).catch(error => {
        console.log(error);
        return Observable.of<any>([]);
      });*/
    this.userObj = this.getUser(user).first();

    console.log(this.userObj);

    if (user.username == 'xiajinxin' && user.password == '123') {
      user.token = 'token-' + new Date;
      localStorage.setItem('currentUser', user.username);
      this.setAuth(user);
      return true;
    }
    localStorage.removeItem('currentUser');
    return false;
  }



}

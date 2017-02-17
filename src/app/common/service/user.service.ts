import { Injectable, Input } from "@angular/core";
import {Http, Response, Headers} from '@angular/http';

import { User } from '../models/user.models';
import {ReplaySubject, Observable} from "rxjs";
import {Subject} from 'rxjs/Subject';
import { TokenService } from './token.service';



@Injectable()
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  public webUrl = "http://localhost:51824";

  errorMessage:string;
  private searchTerms = new Subject<string>();
  private result :boolean;

  constructor(private tokenServcie: TokenService,
              private http :Http
      ) { }

  //判斷是否登錄
  populate(){
    console.log('token'+this.tokenServcie.getToken());
    if (this.tokenServcie.getToken()){
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

  /**
  *  取得用戶數據
  * */
  getUser(user: User):Observable<any>{
    return this.http.post( this.webUrl+'/api/AZ/YAZI01/getToken', {userid: user.username, password: user.password})
      .map((r:Response) => {
        return r;
      }).catch(this.handleError);
  }

  /**
   * 根據用戶獲取樹形菜單
   * @param userName
   */
  getMenuTree(userName: String):Observable<any>{
      return this.http.post(this.webUrl+'/api/AZ/YAZI01/getMenuTree',{username:userName})
        .map((r:Response) => {
          console.log(r);
          return r;
        })
        .catch(this.handleError);
  }


  /**
   * /認證用戶是否登錄過
   * @param user
   * @returns {boolean}
   */
  getAuth(user: User): boolean {
    if(user.token != this.tokenServcie.getToken()){
      localStorage.setItem('currentUser', user.username);
      this.setAuth({ username: user.username, token: user.token, password: '' } as User);
      return true;
    }
    return false;

  /*  if (user.username == 'xiajinxin' && user.password == '123') {
      user.token = 'token-' + new Date;
      localStorage.setItem('currentUser', user.username);
      this.setAuth(user);
      return true;
    }
    localStorage.removeItem('currentUser');
    return false;*/
  }



  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


/**
 * Created by xiajinxin on 2017/2/10.
 */

import {Injectable} from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {UserService} from '../common/service/user.service';
import {Observable} from "rxjs";

@Injectable()
export class NoAuthGuard implements CanActivate{
   private result : boolean;

   constructor(private router:Router,
               private userService:UserService
   ){}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
     console.log('login---'+this.userService.isAuthenticated);
/*
    return this.userService.isAuthenticated.map((isAuthenticated)=>{
       console.log(isAuthenticated);
       return isAuthenticated;
     }).first();*/

     this.userService.isAuthenticated.subscribe(
           (isAuthenticated)=>{
             console.log(isAuthenticated);
             if(!isAuthenticated){
                this.router.navigate(["/login"]);
             }
            this.result = isAuthenticated;
           }
     );
   //  return this.result;

     if (localStorage.getItem('currentUser')) {
       // logged in so return true
       return true;
     }

     // not logged in so redirect to login page
     this.router.navigate(['/login']);
     return false;

   }





}

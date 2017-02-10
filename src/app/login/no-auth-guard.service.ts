
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

   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
     console.log(this.userService.isAuthenticated);
     this.userService.isAuthenticated.subscribe(
       (isAuthenticated)=>{
         if(!isAuthenticated){
            this.router.navigate(["/login"]);
         }
         this.result=isAuthenticated;
       }
     );
     return this.result;
   }





}

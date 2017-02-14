
import {Component,OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {User} from '../../models/user.models';

@Component({
  selector:'layout-header',
  templateUrl:'header.component.html'
})

export class HeaderComponent implements  OnInit{
  constructor(
    private userService:UserService,
    private router:Router
  ){}

  user: String;

  ngOnInit():void{
    this.userService.isAuthenticated.subscribe((isAuthenticated) => {
       if(isAuthenticated){
          this.user = localStorage.getItem('currentUser');
       }
    });
  }

  logout(){
    this.userService.clearAuth();
    this.router.navigateByUrl('/login');
  }
}

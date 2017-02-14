import { Component } from '@angular/core';
import { AppService } from './app.service';

import { TokenService } from './common/service/token.service';
import { UserService } from './common/service/user.service';

declare var SidebarNav: any;
//import '../js/SidebarNav.min.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `
    // <ul *ngFor="let key of menu_title">
    //     {{key}}
    //     <li *ngFor="let item of menu[key]">
    //         {{item.menuid}}
    //     </li>
    // </ul>
    // `,
    styleUrls: ['./app.component.css'],
    // styleUrls: ['../css/SidebarNav.min.css'],
    providers: [AppService, UserService, TokenService]
})
export class AppComponent {
    getData: Array<{ menu_group: string, link: string, menuid: string }> = [];
    title = 'app works!';
    menu: any;
    menu_title: any;
    isSingle:boolean;

    constructor(private _appService: AppService,
                private userService: UserService
    ) { }

    ngOnInit() {
      console.log('opening');

      //判斷token
      this.userService.populate();
      this.userService.isAuthenticated.subscribe((isAuthenticated)=>{
        console.log(isAuthenticated);
        this.isSingle=isAuthenticated;
      });


     /*   $('.sidebar-menu').SidebarNav();
        console.log("GET MENU");
        this._appService.getMenu()
            .subscribe(
            data => this.getData = data,
            error => console.log("ERROR"),
            () => {
                console.log("FINSHED");
                console.log(this.getData);

                this.menu = this.getData.reduce(function (pre, cur) {
                    pre[cur.menu_group] = pre[cur.menu_group] || [];
                    pre[cur.menu_group].push(cur);
                    return pre;
                }, {});

                this.menu_title=Object.keys(this.menu);
                console.log(Object.keys(this.menu));
                console.log(this.menu);

            }
            );*/
    }
}

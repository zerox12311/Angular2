import { Component } from '@angular/core';
import { AppService } from './app.service';

declare var SidebarNav: any;
// import '../js/SidebarNav.min.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `
    // <ul *ngFor="#key of menu_title">
    //     {{key}}
    //     <li *ngFor="let item of menu[key]">
    //         {{item.menuid}}
    //     </li>
    // </ul>
    // `,
    styleUrls: ['./app.component.css'],
    // styleUrls: ['../css/SidebarNav.min.css'],
    providers: [AppService]
})
export class AppComponent {
    getData: Array<{ menu_group: string, link: string, menuid: string }> = [];
    title = 'app works!';
    menu: any;
    menu_title: any;

    constructor(private _appService: AppService) {

    }

    ngOnInit() {
        // $('.sidebar-menu').SidebarNav();
        // console.log("GET MENU");
        // this._appService.getMenu()
        //     .subscribe(
        //     data => this.getData = data,
        //     error => console.log("ERROR"),
        //     () => {
        //         console.log("FINSHED");
        //         console.log(this.getData);

        //         this.menu = this.getData.reduce(function (pre, cur) {
        //             pre[cur.menu_group] = pre[cur.menu_group] || [];
        //             pre[cur.menu_group].push(cur);
        //             return pre;
        //         }, {});

        //         this.menu_title=Object.keys(this.menu);
        //         console.log(Object.keys(this.menu));
        //         console.log(this.menu);

        //     }
        //     );
    }
}

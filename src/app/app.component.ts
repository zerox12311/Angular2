import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  getData: Array<Object> = [];
  title = 'app works!';

  constructor( private _appService: AppService ) { }

  ngOnInit() {
      console.log("GET MENU");
        this._appService.getMenu()
            .subscribe(
                data => this.getData = data,
                error => console.log("ERROR"),
                () => {
                    console.log("FINSHED");
                    console.log(this.getData);
                }
            );
  }
}

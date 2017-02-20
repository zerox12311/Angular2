import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../model/testmd';
// import { Point } from '../model/testinterface';

@Component({
  selector: 'app-callbacktest',
  templateUrl: './callbacktest.component.html',
  // template: `
  // <button type="button" (click)="callObj.test()" >Callback Test1</button>
  // <button type="button" (click)="callObj.zzz()" >Callback Test2</button>
  // `,
  styleUrls: ['./callbacktest.component.css']
})
export class CallbacktestComponent implements OnInit {
  @Input() callObj: Model;
  // md: Model;




  constructor() {

  }
  bfw_add() {
    alert("HIHI");
  }

  ngOnInit() {

  }

}

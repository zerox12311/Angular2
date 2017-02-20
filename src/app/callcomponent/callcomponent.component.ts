import { Component, OnInit } from '@angular/core';
import { CallbacktestComponent } from '../callbacktest/callbacktest.component';
import { Model } from '../model/testmd';

@Component({
  selector: 'app-callcomponent',
  // templateUrl: './callcomponent.component.html',
  template: `
  <app-callbacktest></app-callbacktest>
  `,
  styleUrls: ['./callcomponent.component.css']
})
export class CallcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // showMessage() {
  //   alert('Callback Test 123123');
  // }

  showMessage :Model= {
    test(){
      alert("ZZZZZ");
    },
    zzz(){
      alert("SLEEP");
    }
    
  }

  bfw_add(){
    alert("HIHI");
  }




}

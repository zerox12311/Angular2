import { Injectable } from '@angular/core'
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService {
    constructor ( private _http:Http){

    }


    getMenu() {
        return this._http.get('https://restful-test-1a6a1.firebaseio.com/Menu.json')
            .map(res => res.json())
    }

}

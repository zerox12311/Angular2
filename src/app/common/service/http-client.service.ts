import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {TokenService} from './token.service';

@Injectable()
export class HttpClientService {

  constructor(private http: Http,
              private tokenServcie:TokenService
  ) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('ApiKey', this.tokenServcie.getToken().toString());
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, { headers });
  }
}

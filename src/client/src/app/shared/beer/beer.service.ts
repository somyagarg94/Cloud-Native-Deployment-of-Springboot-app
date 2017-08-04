import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeerService {

  constructor(public http: Http) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8099/good-beers')
      .map((response: Response) => response.json());
  }
}

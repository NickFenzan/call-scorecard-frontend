import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Scorecard, Section, Criteria } from './scorecard';
import 'rxjs/add/operator/map';

@Injectable()
export class ScorecardBuilderService {

  constructor(private http: Http) { }

  getScorecard(): Observable<Scorecard> {
    return this.http.get("./assets/scorecard.json").map(r => new Scorecard(r.json()));
  }


}

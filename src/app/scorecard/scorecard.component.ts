import { Component, OnInit } from '@angular/core';
import { Scorecard, Criteria } from './scorecard';
import { ScorecardBuilderService } from  './scorecard-builder.service';

@Component({
  selector: 'scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  private reviewers = [
      "Carol Leeth",
      "Cindy Lieto",
      "Dianne Nichols"
  ];

  private reviewees = [
      "Meredith Harris",
      "Rhonda Najor",
      "Jessica Clark",
      "Vicki Catto",
      "Connie Gordon"
  ];

  private scorecard: Scorecard = new Scorecard();

  constructor(scorecardBuilder: ScorecardBuilderService) {
    scorecardBuilder.getScorecard().subscribe(s => {
      this.scorecard = s
      this.scorecard.sections
      .forEach(s => s.criteria.forEach(c => c.value = true));
    });
  }

  ngOnInit() {
  }

  toggleCriteriaValue(criteria: Criteria){
    criteria.value = !criteria.value;
  }

  notApplicable(criteria: Criteria){
    criteria.notApplicable = !criteria.notApplicable;
  }

  get diagnostic() { return JSON.stringify(this.scorecard); }

}

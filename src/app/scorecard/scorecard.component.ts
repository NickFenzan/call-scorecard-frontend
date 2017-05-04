import { Component, OnInit } from '@angular/core';

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

  private model = {
    criteriaScore:{
      "greeting":true,
      "guestName":true,
      "keepInformed":true,
      "politeLanguage":true,
      "enthusiasm":true,
      "permissionInformation":true,
      "offerAdditionalHelp":true,
      "permissionHold":true,
      "referredByPhysician":true,
      "referralSource":true,
      "referralSourceDataEntry":true,
      "overcomeObjection":true,
      "rescheduleCancellation":true,
      "freeVsFull":true
    }
  };

  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}

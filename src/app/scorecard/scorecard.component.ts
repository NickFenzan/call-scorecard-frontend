import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Http } from '@angular/http';
import { Scorecard, Criteria, ScorecardDAO } from './scorecard';
import { ScorecardBuilderService } from  './scorecard-builder.service';

@Component({
  selector: 'scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css'],
  animations: [
    trigger('notification', [
      state('0', style({
        opacity: 0,
        display:"none"
      })),
      state('1',   style({
        opacity: 1,
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ])
  ]
})
export class ScorecardComponent implements OnInit {
  /**Config -----------------------------------------**/
  readonly scorecardUrl:string = "https://callscorecard/backend";

  readonly reviewers = [
      "Carol Leeth",
      "Cindy Lieto",
      "Dianne Nichols"
  ];

  readonly reviewees = [
      "Meredith Harris",
      "Rhonda Najor",
      "Jessica Clark",
      "Vicki Catto",
      "Connie Gordon"
  ];
  /**-------------------------------------------------**/
  @ViewChild('fileInput')
  private fileInput;
  private error: boolean = false;
  private success: boolean = false;
  private scorecard: Scorecard = new Scorecard();

  constructor(private scorecardBuilder: ScorecardBuilderService, private http: Http) {
    scorecardBuilder.getScorecard().subscribe(s => {
      s.reset();
      this.scorecard = s
    });
  }

  ngOnInit() {
  }

  callFileChange(event){
    this.scorecard.callId = event.srcElement.files[0].name;
  }

  toggleCriteriaValue(criteria: Criteria){
    criteria.value = !criteria.value;
  }

  notApplicable(criteria: Criteria){
    criteria.notApplicable = !criteria.notApplicable;
  }

  submit(){
    this.http.post(this.scorecardUrl + "/scorecards",
    this.scorecardToDAO()).subscribe(
      r => {
        this.fileInput.nativeElement.value = ""
        this.scorecard.reset();
        this.success = true;
        setTimeout(()=>this.success=false,3000);
        window.scrollTo(0,0);
      },
      e => {
        this.error = true;
        setTimeout(()=>this.error=false,3000);
        console.log(e);
        window.scrollTo(0,0);
      }
    );
  }

  private scorecardToDAO(){
    let DAO = new ScorecardDAO();
    DAO.reviewer = this.scorecard.reviewer;
    DAO.reviewee = this.scorecard.reviewee;
    DAO.callId = this.scorecard.callId;
    DAO.criteria = this.scorecard.sections
    .reduce((all,current)=> all.concat(current.criteria),[])
    .filter(criteria => criteria.notApplicable == false)
    .reduce((out,criteria) => {
      out[criteria.id] = criteria.value
      return out;
    },{});
    return DAO;
  }

  get diagnostic() { return JSON.stringify(this.scorecard); }

}

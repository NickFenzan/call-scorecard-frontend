interface IScorecard {
  reviewer: string;
  reviewee: string;
  callId: string;
  sections: Section[];
}
export class Scorecard implements IScorecard {
  reviewer: string = "";
  reviewee: string = "";
  callId: string = "";
  sections: Section[] = [];
  constructor();
  constructor(obj: IScorecard)
  constructor(obj?: any){
    if(obj){
      this.reviewer = obj.reviewer || "";
      this.reviewee = obj.reviewee || "";
      this.sections = obj.sections.map(s => new Section(s));
    }
  }

  public reset(){
    this.callId = "";
    this.sections.forEach(s => s.reset());
  }
}

interface ISection {
  name: string;
  criteria: Criteria[];
}

export class Section implements ISection {
  name: string = "";
  criteria: Criteria[] = [];
  constructor();
  constructor(obj: ISection)
  constructor(obj?: any){
    if(obj){
      this.name = obj.name;
      this.criteria = obj.criteria.map(c => new Criteria(c));
    }
  }
  public reset(){
    this.criteria.forEach(c => c.reset());
  }
}

interface ICriteria {
  id: string;
  description: string;
  optional: boolean;
  notApplicable: boolean;
  value: boolean;
}

export class Criteria implements ICriteria {
  id: string = "";
  description: string = "";
  optional: boolean = false;
  notApplicable: boolean = false;
  value: boolean = true;
  constructor();
  constructor(obj: ICriteria)
  constructor(obj?: any){
    if(obj){
      this.id = obj.id;
      this.description = obj.description;
      this.optional = obj.optional;
      this.notApplicable = obj.notApplicable;
      this.value = obj.value
    }
  }
  public reset(){
    this.notApplicable = false;
    this.value = true;
  }
}

export class ScorecardDAO {
  reviewer:string;
  reviewee:string;
  callId:string;
  criteria:any[];
  constructor(){}
}

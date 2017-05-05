export class Scorecard {
  reviewer: string;
  reviewee: string;
  sections: Section[];
  constructor(){}
  public setAllTrue(){
    console.log("Set all true");
    this.sections.forEach(s => s.setAllTrue());
  }
}

export class Section {
  name: string;
  criteria: Criteria[];
  public setAllTrue(){
    this.criteria.forEach(c => c.value = true);
  }
}

export class Criteria {
  id: string;
  description: string;
  optional: boolean;
  notApplicable: boolean;
  value: boolean;
}

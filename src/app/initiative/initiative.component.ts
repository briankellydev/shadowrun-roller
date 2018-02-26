import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'initiative-component',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  public initList: any = [];
  public compiledList: any = [];
  public selectedItem: any;
  public showInput: boolean;

  ngOnInit() {
      this.startOver();
  }
  
  compile() {
      let cloneList: any[];
      _.forEach(this.initList, (item: any) => {
        let numberOfTurns = Math.floor(item.score / 10) - 1;
        for(let i  = 0; i < numberOfTurns; i++) {
          item.score - 10;
          this.initList.push(item);
        }
      });
      cloneList = _.sortBy(this.initList, (item: any) => {
          return item.score;
      });
      this.compiledList = cloneList.reverse();
  }

  startOver() {
    this.initList = [];
    this.compiledList = [];
    for(let i = 0; i < 15; i++) {
      let onePerson = {name: '', score: 0};
      this.initList.push(onePerson);
    };
    this.showInput = true;
  }

}

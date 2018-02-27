import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'initiative-component',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  public initList: any = [];
  public compiledList: any[][] = [
    [],[],[],[],[]
  ];
  public selectedItem: any;
  public showInput: boolean;

  ngOnInit() {
      this.startOver();
  }
  
  compile() {
    console.log(this.compiledList);
      _.forEach(this.initList, (item: any) => {
        item.id = Math.random();
        this.compiledList[0].push(_.cloneDeep(item));
        let i = 1;
        while(item.score > 10) {
          console.log(i);
          console.log(item.score);
          item.id = Math.random();
          item.score -= 10;
          this.compiledList[i].push(_.cloneDeep(item));
          i++;
        } 
      });
      _.forEach(this.compiledList, (passArray: any[]) => {
        _.sortBy(passArray, (item: any) => {
          return item.score;
        });
        passArray.reverse();
      });
      console.log(this.compiledList);
      this.showInput = false;
  }

  startOver() {
    this.initList = [];
    this.compiledList = [
      [],[],[],[],[]
    ];
    for(let i = 0; i < 15; i++) {
      let onePerson = {name: '', score: 0};
      this.initList.push(onePerson);
    };
    this.showInput = true;
  }

}

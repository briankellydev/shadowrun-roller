import { Component, OnInit } from '@angular/core';
import { RollService } from '../roll.service';

@Component({
  selector: 'roll-component',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit {

  public numbersOfDice:number[] = [];
  public rollResult: any;
  public showModal: boolean;
  public backgroundStyle: any;

  constructor(private rollService: RollService) { }

  ngOnInit() {
    for(let i = 0; i < 20; i++) {
      this.numbersOfDice.push(i + 1);
    }
  }

  roll(number: number) {
    this.rollResult = this.rollService.rollDice(number);
    this.backgroundStyle = this.rollResult.glitch ? null : 'black';
    this.showModal = true;
  }

}

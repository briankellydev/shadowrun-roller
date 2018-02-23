import { Injectable } from '@angular/core';

@Injectable()
export class RollService {

  constructor() { }

  rollDice(number:number): any {
    //Number = number of dice, sides = sides of dice, plus = number to add after roll
    let rollArray = [];
    for(let i = 0; i < number; i++) {
      //Random function based on number of sides
      let roll = Math.floor(Math.random() * 6) + 1;
      //Push roll into an array of all rolls
      rollArray.push(roll);
     }
    return this.determineNumberOfHits(rollArray);
  };

  determineNumberOfHits(rollArray:number[]) {
    let numberOfHits = 0;
    let totalDiceRolled = rollArray.length;
    let numberOfOnes = 0;
    let results = {
      numberOfHits: 0,
      glitch: false,
      criticalGlitch: false
    };

    for(let i = 0; i < totalDiceRolled; i++) {
      // considered a hit if 5 or 6
      if(rollArray[i] > 4) {
        numberOfHits++;
      } else if(rollArray[i] === 1) {
        numberOfOnes++;
      }
    }

    results.numberOfHits = numberOfHits;
    // considered a glitch if more than half are 1s
    results.glitch = numberOfOnes > Math.floor(totalDiceRolled/2);
    // considered a critical glitch if more than half are 1s and there are no hits
    results.criticalGlitch = results.glitch && numberOfHits === 0;
    return results;
  }

}

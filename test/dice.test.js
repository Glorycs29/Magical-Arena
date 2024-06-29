import { expect } from 'chai';
import Dice from '../src/dice.js';
describe('Dice', () =>{
    it('should return a value between 1 and 6', () =>{
        for(let i=0; i<100; i++){
            const roll = Dice.roll();
            expect(roll).to.be.within(1,6);
        }
    });
});
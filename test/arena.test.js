import { expect } from 'chai';
import Player from '../src/player.js';
import Arena from '../src/arena.js';
import Dice from '../src/dice.js';

describe('Arena', () => {
    it('should end with either playerA or playerB dead', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);

        const arena = new Arena(playerA, playerB);
        arena.startFight();

        expect(playerA.isAlive() && playerB.isAlive()).to.be.false; 
    });
});

import { expect } from 'chai';
import Player from '../src/player';
import Arena from '../src/arena';
import Dice from '../src/dice';



describe('Arena', () =>{
    it('should handle a complete fight', () => {
        const playerA = new Player('Player A', 50, 5,10);
        const playerB = new Player('Player B', 100, 10, 5);
        const arena = new Arena(playerA, playerB);

        // Mocking dice rolls for predictability in test
        Dice.roll = () => 5; // attack roll
        arena.attack(playerA, playerB);
        expect(playerB.health).to.equal(50);

        Dice.roll = () => 2; // defend roll
        arena.attack(playerB, playerA);
        expect(playerA.health).to.equal(20);

    });

    it('should correctly calculate damage and update health', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        const arena = new Arena(playerA, playerB);

        // Mocking dice rolls for predictability in test
        Dice.roll = () => 5; // attack roll
        arena.attack(playerA, playerB);
        expect(playerB.health).to.equal(50);

        Dice.roll = () => 2; // defend roll
        arena.attack(playerB, playerA);
        expect(playerA.health).to.equal(20);
    });
});
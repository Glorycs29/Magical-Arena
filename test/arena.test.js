const { expect } = require('chai');
const Player = require('..src/player');
const Arena = require('..src/arena');
const Dice = require('..src/dice');

describe('Arena', () =>{
    it('should handle a comlete fight', () => {
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
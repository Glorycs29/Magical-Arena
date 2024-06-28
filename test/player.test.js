const { expect } = require('chai');
const Player = require('../src/player');

describe('Player', () =>{
    it('should initialize with correct attributes', () =>{
        const player = new Player('Player A', 50, 5, 10);
        expect(player.name).to.equal('Player A');
        expect(player.health).to.equal(50);
        expect(player.strength).to.equal(5);
        expect(player.attack).to.equal(10);
    });

    it('should correctly identify if player is alive', () =>{
        const player = new Player('Player A', 50, 5, 10);
        expect(player.isAlive()).to.be.true;
        player.health = 0;
        expect(player.isAlive()).to.be.false;
    });
});
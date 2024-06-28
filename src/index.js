const Player = require('./player.js');
const Arena = require('./arena.js');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const arena = new Arena(playerA, PlayerB);
arena.startFight(); 
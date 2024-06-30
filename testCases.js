import Player from './src/player.js';
import Arena from './src/arena.js';

export const runTestCases = () => {
    console.log("------- Running Test Cases -------");

    const testCases = [
        {
            playerA: new Player('Player A1', 50, 5, 10),
            playerB: new Player('Player B1', 100, 10, 5),
        },
        {
            playerA: new Player('Player A2', 100, 10, 10),
            playerB: new Player('Player B2', 80, 8, 8),
        },
        {
            playerA: new Player('Player A3', 60, 20, 10),
            playerB: new Player('Player B3', 50, 30, 5),
        },
        {
            playerA: new Player('Player A4', 90, 10, 10),
            playerB: new Player('Player B4', 80, 10, 10),
        },
        {
            playerA: new Player('Player A5', 10, 20, 10),
            playerB: new Player('Player B5', 30, 5, 10),
        },
        {
            playerA: new Player('Player A6', 100, 5, 10),
            playerB: new Player('Player B6', 135, 10, 10),
        },
        {
            playerA: new Player('Player A7', 60, 10, 10),
            playerB: new Player('Player B7', 80, 5, 10),
        },
        {
            playerA: new Player('Player A8', 100, 10, 10),
            playerB: new Player('Player B8', 150, 10, 12),
        },
        {
            playerA: new Player('Player A9', 10, 10, 10),
            playerB: new Player('Player B9', 10, 30, 10),
        },
        {
            playerA: new Player('Player A10', 120, 10, 10),
            playerB: new Player('Player B10', 100, 20, 10),
        }
        
    ];

    testCases.forEach(({ playerA, playerB, expectedWinner }, index) => {
        const arena = new Arena(playerA, playerB);
        console.log(`Test Case ${index + 1}:`);
        arena.startFight();
        const winner = playerA.isAlive() ? playerA.name : playerB.name;
        console.log('------------------------------------------------------------');
    });
};

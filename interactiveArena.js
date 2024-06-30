import readline from 'readline';
import Player from './src/player.js';
import Arena from './src/arena.js';
import Dice from './src/dice.js';

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user and get input
const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};

const getPlayerDetails = async (playerLabel) => {
    const name = await askQuestion(`Enter name for ${playerLabel}: `);
    let health;
    do {
        health = parseInt(await askQuestion(`Enter health for ${playerLabel}: `), 10);
    } while (isNaN(health) || health <= 0);

    let attack;
    do {
        attack = parseInt(await askQuestion(`Enter attack for ${playerLabel}: `), 10);
    } while (isNaN(attack) || attack <= 0);

    let strength;
    do {
        strength = parseInt(await askQuestion(`Enter strength for ${playerLabel}: `), 10);
    } while (isNaN(strength) || strength <= 0);

    return new Player(name, health, attack, strength);
};

(async () => {
    console.log("Welcome to the Magical Arena!");

    const playerA = await getPlayerDetails("Player A");
    const playerB = await getPlayerDetails("Player B");

    const arena = new Arena(playerA, playerB);
    arena.startFight();

    if (playerA.isAlive()) {
        console.log(`${playerA.name} is the winner!`);
    } else {
        console.log(`${playerB.name} is the winner!`);
    }

    rl.close();
})();

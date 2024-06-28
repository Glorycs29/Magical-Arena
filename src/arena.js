const Dice = require('./dice');

class Arena{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    startFight(){
        while(this.player1.isAlive() && this.player2.isAlive()){
            this.fightRound();
        }

        const winner = this.player1.isAlive() ? this.player1.name : this.player2.name;
        console.log(`The winnwe is ${winner}`);
    }

    fightRound(){
        const attacker = this.player1.health < this.player2.health ? this.player1 : this.player2;
        const defender = this.player1.health < this.player2.health ? this.player2 : this.player1;

        this.attack(attacker, defender);

        if(defender.isAlive()){
            this.attack(defender, attacker);
        }
    }

    attack(attacker, defender){
        const attackRoll = Dice.roll();
        const defendRoll = Dice.roll();
        // attackVal = attack_value * attack_roll
        // defendVal = defend_strength*defend_roll

        const attackDamage = attacker.attack*attackRoll;
        const defendStrength = defender.strength*defendRoll;

        const damage = attackDamage - defendStrength;

        if(damage > 0){
            defender.health -= damage;
        }else{
            defender.health = 0;
        }
    }
}

module.exports = Arena;
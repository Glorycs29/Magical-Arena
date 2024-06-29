### Magical Arena

##### Overview:
- This game is a fight between two players, there are attributes defined by health, strength, and attack. 
- The fight continues until one player wins, or other one's health becomes zero. There are some rules for fighting and defending, and uses dice throws to for updation of health of defending person.

##### Game rules:

1. Players have three attributes: health, strength, and attack, player dies if health attribute reaches 0.
2. Fighting rules:
    - The player with lower health value attack first at the start of a match.
    - While attacking:
        - The attacking player rolls a dice of 6-sided.
        - The defending player rolls a dice of 6-sided. 
        - The "attackValue" is calculated by (attack)*(attack dice roll).
        - The "defendValue" is calculated by (strength)*(defend dice roll).
        - The health of defender will be reduce by (attackValue - defendValue).




#### Installation:

1. Clone repository:
    <code>git clone https://github.com/Glorycs29/Magical-Arena.git</code>
2. Navigate to project directory:
    <code>cd Magical-Arena</code>
3. Install the dependencies:
    <code>npm install</code>

#### Run the game:

- <code>node src/index.js</code>

#### Run tests:

- <code>npm test</code>

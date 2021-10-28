const inquirer = require("inquirer");
const Player = require("./Player");
const Enemy = require("./Enemy");

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = []
    this.currentEnemy;
    this.player;

Game.prototype.initializeGame = function(){
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    
    //keeps track of which enemy player is fighting
    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    //destructure name from the prompt
    //using arrow function for inquirer callbacks avoids this. method from conflictin with game() object and focuses on inquirer
    .then(({name}) => {
        this.player = new Player(name);

        //placeholder for starting a new round
        this.startNewBattle()
    });
};
};

module.exports = Game;
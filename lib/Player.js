//Import Poition to player object
const Potion = require('../lib/Potion');

//constructor function for player
function Player(name = '') {
    //creates empty object for name
    this.name = name;

    //creates random health between 95 & 105
    this.health = Math.floor(Math.random() * 10 + 95);
    //creates random strength and agility between 7 & 12
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.isAlive = function(){
    //if the health is equal to 0 player dies
    if (this.health === 0) {
        return false;
    }
    return true;
};

    //returns an object with various player properties
Player.prototype.getStats = function() {
    return{
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

//returns the inventory array of false if empty
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

//returns the current health status
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

//reduces health
Player.prototype.reduceHealth = function(health) {
    this.health -= health

    //conditional to ensure the health never goes negative
    if(this.health < 0) {
        this.health = 0;
    }
};

Player.prototype.getAttackValue = function() {
    //created min and max to maintain function easier
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min) + min);
}

Player.prototype.addPotion = function(potion) {

    //push is an array method that addsan item to the end of the array
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    //splice method removes items from array and returns items to new array
    const potion = this.getInventory().splice(index,1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.getAttackValue
            break;
        case 'health':
            this.health += potion.getAttackValue
            break;
        case 'strength':
            this.strength += potion.getAttackValue
            break;
    }
};

//construct for Player
module.exports = Player
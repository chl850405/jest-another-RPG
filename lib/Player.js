//Import Poition
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

    Player.prototype.isAlive = function(){
        if (this.health === 0) {
            return false;
        }
        return true;
    };
}
    //returns an object with various player properties
Player.prototype.getStats = function() {
    return{
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agaility
    };
};

//returns the inventory array of false if empty
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health

    //conditional to ensure the health never goes negative
    if(this.health < 0) {
        this.health = 0;
    }
};
//construct for Player
module.exports = Player
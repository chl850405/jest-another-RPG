//prototypes .isAlive .getHealth .getAttackValue .reduceHealth were deleted and now unbrellaed in character.js

//Import Poition to player object
const Potion = require('../lib/Potion');

//imports the Character()
const Character = require('./Character');

//constructor function for player using ES6 syntax class
class Player extends Character {
    constructor(name = '') {
    //call parent constructor
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
}

    //returns an object with various player properties
getStats() {
    return{
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
}

getInventory() {
    if (this.inventory.length) {
    return this.inventory;
}
return false;
}

addPotion(potion) {

    //push is an array method that addsan item to the end of the array
    this.inventory.push(potion);
}

usePotion(index) {
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
    }
}

//construct for Player
module.exports = Player
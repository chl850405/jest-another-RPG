//prototypes .isAlive .getHealth .getAttackValue .reduceHealth were deleted and now unbrellaed in character.js

//imports potion to enemy object
const Potion = require('./Potion');

//imports the Character()
const Character = require('./Character');

//constructor function fo enemy
class Enemy extends Character {
  constructor(name , weapon) {
  //creates empty object for name
  super(name);
  //creates empty object for weapon
  this.weapon = weapon;
  //creates new potion by calling potion() function
  this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

//construct for Enemy
module.exports = Enemy;
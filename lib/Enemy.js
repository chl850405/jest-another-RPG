//imports potion to enemy object
const Potion = require('./Potion');

//constructor function fo enemy
function Enemy(name, weapon) {
  //creates empty object for name
  this.name = name;
  //creates empty object for weapon
  this.weapon = weapon;
  //creates new potion by calling potion() function
  this.potion = new Potion();

  //creates random health between 95 & 105
  this.health = Math.floor(Math.random() * 10 + 85);
  //creates random health between 7 &12
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
}

//returns the current health status
Enemy.prototype.getHealth = function() {
return `The ${this.name}'s health is now ${this.health}!`;
};


Enemy.prototype.isAlive = function() {
  // if health is equal to 0 the enemy dies
if (this.health === 0) {
    return false;
}
return true;
};

Enemy.prototype.getAttackValue = function() {
  //created min and max maintain the function easier
const min = this.strength - 5;
const max = this.strength + 5;

return Math.floor(Math.random() * (max - min) + min);
};

//reduces health
Enemy.prototype.reduceHealth = function(health) {
this.health -= health;

if (this.health < 0) {
    this.health = 0;
}
};

Enemy.prototype.getDescription = function() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

//construct for Enemy
module.exports = Enemy;
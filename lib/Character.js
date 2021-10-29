//this Character Funtion unbrella's prototype listed for both player and enemy. this prototypes are no longer needed in player or enemy

class Character {
    constructor(name = '') {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
}

isAlive() {
    //if the health is equal to 0 player dies
    if (this.health === 0) {
        return false;
    }
    return false;
}

getHealth() {
    //returns the current health status
    return `${this.name}'s health is now ${this.health}!`;
};

getAttackValue() {
    //created min and max to maintain function easier
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min) + min);
}

reduceHealth(health) {
    this.health -= health;

    //conditional to ensure the health never goes negative
    if (this.health < 0) {
        this.health = 0;
        }
    }
}

module.exports = Character;
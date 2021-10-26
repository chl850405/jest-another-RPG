//imports the Potion() constructor into the test
const Potion = require('../lib/Potion');
const Player = require('../lib/Player');

console.log(new Potion());

// SyntaxError: Identifier 'jest' has already been declared- means that there is a term that has been repeated and is not needed
// const { test, expect, jest } = require('@jest/globals')

//replaces the constructor's implementation with faked data
jest.mock('../lib/Potion');





test('creates a player object', () => {
    const player = new Player ('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

//returns an object with four specific properties
test('gets players stats as an object', () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or return false', () => {
    const player = new Player('Dave');

    //should return array
    expect(player.getInventory()).toEqual(expect.any(Array));

    //simulates empty array before next expect() runs
    player.inventory = [];

    //empty inventory returns as false
    expect(player.getInventory()).toEqual(false);
});
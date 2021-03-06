//imports the Potion() constructor into the test
const Potion = require('../lib/Potion');
const Player = require('../lib/Player');

// SyntaxError: Identifier 'jest' has already been declared- means that there is a term that has been repeated and is not needed
// ie const { test, expect, jest } = require('@jest/globals')

//replaces the constructor's implementation with faked data
jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    });

test("gets player's health value", () => {
    const player = new Player ('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));

});

//returns an object with four specific properties
test('gets players stats as an object', () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive());

    player.health = 0;

    expect(player.isAlive());
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

test('adds a potion to the inventory', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});

test("gets player's attack value", () => {
    const player = new Player ('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});


test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

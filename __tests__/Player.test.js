//imports the Potion() constructor into the test
const Potion = require('../lib/Potion');

//replaces the constructor's implementation with faked data
jest.mock('../lib/Potion');


const { test, expect, jest } = require('@jest/globals')
const Player = require('../lib/Player')

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
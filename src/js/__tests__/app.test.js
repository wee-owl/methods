import Character from '../app';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('check name in character class', () => {
  expect(() => new Character('namenamename')).toThrow('Invalid value (string length must be between 2 and 10)');
  expect(() => new Character(123)).toThrow('Invalid value (string length must be between 2 and 10)');
  expect(() => new Character('name')).toBeTruthy();
});

test('check type in character class', () => {
  expect(() => new Character('name', 'typetypetype')).toThrow('Invalid character name value');
  expect(() => new Character('name', 123)).toThrow('Invalid character name value');
  expect(() => new Character('name', 'Bowman')).toBeTruthy();
});

test('check level-up method for dead person', () => {
  const character = new Character('name', 'Zombie');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Your character is dead');
});

test('check level-up method for living person', () => {
  const character = new Zombie('name', 'Zombie', 100, 1, 40, 10);
  character.levelUp();
  expect(character).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 8,
    protection: 10,
  });
});

test('check damage method for living person', () => {
  const character = new Zombie('name', 'Zombie', 100, 1, 40, 10);
  character.damage(1);
  expect(character).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 99.1,
    level: 1,
    attack: 40,
    protection: 10,
  });
});

test('check damage method for dead person', () => {
  const character = new Character('name', 'Zombie');
  character.health = 0;
  character.damage(1);
  expect(character).toBeTruthy();
});

test('check bowman class', () => {
  const result = new Bowman('name', 'Bowman', 100, 1, 25, 25);
  expect(result).toEqual({
    name: 'name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  });
});

test('check daemon class', () => {
  const result = new Daemon('name', 'Daemon', 100, 1, 10, 40);
  expect(result).toEqual({
    name: 'name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  });
});

test('check magician class', () => {
  const result = new Magician('name', 'Magician', 100, 1, 10, 40);
  expect(result).toEqual({
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  });
});

test('check swordsman class', () => {
  const result = new Swordsman('name', 'Swordsman', 100, 1, 40, 10);
  expect(result).toEqual({
    name: 'name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  });
});

test('check undead class', () => {
  const result = new Undead('name', 'Undead', 100, 1, 25, 25);
  expect(result).toEqual({
    name: 'name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  });
});

test('check zombie class', () => {
  const result = new Zombie('name', 'Zombie', 100, 1, 40, 10);
  expect(result).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  });
});

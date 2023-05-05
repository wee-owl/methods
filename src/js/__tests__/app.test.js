import Character from '../app';

test('check name in character class', () => {
  expect(() => new Character('namenamename')).toThrow();
  expect(() => new Character(123)).toThrow();
});

test('check type in character class', () => {
  expect(() => new Character('name', 'typetypetype')).toThrow();
  expect(() => new Character('name', 123)).toThrow();
});

test('check level-up method for dead person', () => {
  const character = new Character('name', 'Zombie');
  character.health = 0;
  expect(() => character.levelUp()).toThrow();
});

test('check level-up method for living person', () => {
  const character = new Character('name', 'Zombie');
  character.attack = 40;
  character.defence = 10;
  character.levelUp();
  expect(character).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test('check damage method for dead person', () => {
  const character = new Character('name', 'Zombie');
  character.health = 0;
  expect(() => character.damage(1)).toThrow();
});

test('check damage method for living person', () => {
  const character = new Character('name', 'Zombie');
  character.health = 100;
  character.defence = 10;
  character.damage(100);
  expect(character.health).toBe(10);
});

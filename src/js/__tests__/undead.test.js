import Undead from '../undead';

test('check undead class', () => {
  const result = new Undead('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

import Bowman from '../bowman';

test('check bowman class', () => {
  const result = new Bowman('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

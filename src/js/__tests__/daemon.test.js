import Daemon from '../daemon';

test('check daemon class', () => {
  const result = new Daemon('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

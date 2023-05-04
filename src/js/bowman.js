import Character from './app';

export default class Bowman extends Character {
  constructor(type, attack, protection) {
    super(type, attack, protection);
    this.type = 'Bowman';
    this.attack = 25;
    this.protection = 25;
  }
}

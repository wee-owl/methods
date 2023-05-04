import Character from './app';

export default class Magician extends Character {
  constructor(type, attack, protection) {
    super(type, attack, protection);
    this.type = 'Magician';
    this.attack = 10;
    this.protection = 40;
  }
}

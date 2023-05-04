import Character from './app';

export default class Swordsman extends Character {
  constructor(type, attack, protection) {
    super(type, attack, protection);
    this.type = 'Swordsman';
    this.attack = 40;
    this.protection = 10;
  }
}

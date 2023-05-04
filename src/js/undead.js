import Character from './app';

export default class Undead extends Character {
  constructor(type, attack, protection) {
    super(type, attack, protection);
    this.type = 'Undead';
    this.attack = 25;
    this.protection = 25;
  }
}

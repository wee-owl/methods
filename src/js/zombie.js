import Character from './app';

export default class Zombie extends Character {
  constructor(type, attack, protection) {
    super(type, attack, protection);
    this.type = 'Zombie';
    this.attack = 40;
    this.protection = 10;
  }
}

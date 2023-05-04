import Character from './app';

export default class Daemon extends Character {
  constructor(type, attack, protection) {
    super(type, attack, protection);
    this.type = 'Daemon';
    this.attack = 10;
    this.protection = 40;
  }
}

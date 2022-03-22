import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.cell = 2;
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  get attack() {
    if (this.cell > 10) this.s_attack = 0;
    return this.s_attack;
  }

  set attack(value) {
    const lineDepend = Math.round(value * (1.1 - 0.1 * this.cell));
    this.s_attack = (!this.stoned) ? lineDepend : lineDepend - Math.log2(this.cell) * 5;
  }

  get stoned() {
    return this.s_stoned;
  }

  set stoned(value) {
    this.s_stoned = value;
  }
}

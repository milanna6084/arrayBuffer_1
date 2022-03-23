import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.cell = 2;
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  get attack() {
    if (this.cell > 10) return 0;

    const lineDepend = Math.round(this.s_attack * (1.1 - 0.1 * this.cell));

    return (!this.stoned) ? lineDepend : (lineDepend - Math.log2(this.cell) * 5);
  }

  set attack(value) {
    this.s_attack = value;
  }

  get stoned() {
    return this.s_stoned;
  }

  set stoned(value) {
    this.s_stoned = value;
  }
}

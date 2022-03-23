import Magician from '../character/Magician';
import Daemon from '../character/Daemon';

describe('property attack getter/setter', () => {
  test('if number of cells is more than "10" attack value equal "0"', () => {
    const norman = new Magician('Norman');
    norman.cell = 15;
    expect(norman.attack).toBe(0);
  });

  test('linear dependence of attack level', () => {
    const daemon = new Daemon('Daemon');
    daemon.attack = 100;
    expect(daemon.attack).toBe(90);
    expect(daemon.attack).toBe(90);
  });

  test('not linear dependence of attack level', () => {
    const norman2 = new Magician('Norman');
    norman2.stoned = true;
    norman2.attack = 100;
    expect(norman2.attack).toBe(85);
    expect(norman2.attack).toBe(85);
  });
});

import { randomInt } from 'node:crypto';

function random(
  enumerator: any,
  trends: object
): number {
  // TODO : au lieu de 100, faire la somme des trends

  const rand = randomInt(1, 100);
  const counter = 0;
  for (const [key, value] of Object.entries(trends)) {
    if (rand > counter && rand < counter + value) {
      return enumerator[key];
    }
  }
}

export { random as random100 };

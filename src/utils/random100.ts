import { randomInt } from 'node:crypto';

function random(enumerator: any, trends: object): number {
  // TODO : au lieu de 100, faire la somme des trends

  const total = Object.values(trends).reduce((sum, v) => sum + Number(v), 0);
  if (total === 0) {
    return undefined;
  }
  const rand = randomInt(1, total);
  let counter = 0;
  for (const [key, value] of Object.entries(trends)) {
    const val = Number(value);
    if (rand > counter && rand <= counter + val) {
      return enumerator[key];
    }
    counter += val;
  }
  // Edge case: if rand does not match any range, return undefined or throw
  return undefined;
}

export { random as random100 };

import { random100 } from './random100';

describe('random100', () => {
  const enumerator = { A: 1, B: 2, C: 3 };
  const trends = { A: 30, B: 50, C: 20 }; // total = 100

  it('should return a value from enumerator', () => {
    const result = random100(enumerator, trends);
    expect(Object.values(enumerator)).toContain(result);
  });

  it('should return A with higher probability', () => {
    jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(1);
    const result = random100(enumerator, trends);
    expect(result).toBe(1);
    jest.restoreAllMocks();
  });

  it('should return B with higher probability', () => {
    jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(40);
    const result = random100(enumerator, trends);
    expect(result).toBe(2);
    jest.restoreAllMocks();
  });

  it('should return C with higher probability', () => {
    jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(90);
    const result = random100(enumerator, trends);
    expect(result).toBe(3);
    jest.restoreAllMocks();
  });

  it('should handle empty trends gracefully', () => {
    const result = random100(enumerator, {});
    expect(result).toBeUndefined();
  });

  it('should return undefined if trends values are all zero', () => {
    const zeroTrends = { A: 0, B: 0, C: 0 };
    const result = random100(enumerator, zeroTrends);
    expect(result).toBeUndefined();
  });

  it('should return undefined if enumerator is empty', () => {
    const result = random100({}, trends);
    expect(result).toBeUndefined();
  });

  it('should return correct value when trends only has one key', () => {
    const singleTrends = { B: 100 };
    jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(50);
    const result = random100(enumerator, singleTrends);
    expect(result).toBe(2);
    jest.restoreAllMocks();
  });

  it('should return undefined if randomInt is out of range', () => {
    jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(101);
    const result = random100(enumerator, trends);
    expect(result).toBeUndefined();
    jest.restoreAllMocks();
  });
});
it('should return correct value when randomInt returns 1 (lower bound)', () => {
  jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(1);
  const enumerator = { A: 1, B: 2, C: 3 };
  const trends = { A: 30, B: 50, C: 20 }; // total = 100
  const result = random100(enumerator, trends);

  expect(result).toBe(1);
  jest.restoreAllMocks();
});

it('should return correct value when randomInt returns total (upper bound)', () => {
  jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(100);
  const enumerator = { A: 1, B: 2, C: 3 };
  const trends = { A: 30, B: 50, C: 20 }; // total = 100
  const result = random100(enumerator, trends);

  expect(result).toBe(3);
  jest.restoreAllMocks();
});

it('should return correct value when randomInt is at the edge of a trend range', () => {
  jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(30);
  const enumerator = { A: 1, B: 2, C: 3 };
  const trends = { A: 30, B: 50, C: 20 }; // total = 100
  const result = random100(enumerator, trends);
  // rand = 30, counter = 0, val = 30, so rand > counter && rand <= counter + val => 30 > 0 && 30 <= 30 => true
  expect(result).toBe(1);
  jest.restoreAllMocks();
});

it('should return correct value when randomInt is at the edge of the last trend range', () => {
  jest.spyOn(require('node:crypto'), 'randomInt').mockReturnValue(100);
  const enumerator = { A: 1, B: 2, C: 3 };
  const trends = { A: 30, B: 50, C: 20 }; // total = 100
  const result = random100(enumerator, trends);
  // Should be undefined, as randomInt is exclusive upper bound, but test for robustness
  expect(result).toBe(3);
  jest.restoreAllMocks();
});

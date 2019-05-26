import { MultiplicativePersistence } from './MultiplicativePersistence';

describe('MultiplicativePersistence', () => {
  let mp = new MultiplicativePersistence();

  it('should calculate a single "stage" of persistence', () => {
    expect(MultiplicativePersistence.calcStage(0)).toBe(0);
    expect(MultiplicativePersistence.calcStage(123)).toBe(6);
    expect(MultiplicativePersistence.calcStage(3245)).toBe(120);
    expect(MultiplicativePersistence.calcStage(5499)).toBe(1620);
    expect(MultiplicativePersistence.calcStage(7845)).toBe(1120);
    expect(MultiplicativePersistence.calcStage(277777788888899)).toBe(4996238671872);
    // expect(MultiplicativePersistence.calcStage(77777733332222222222222222222)).toBe(4996238671872);
  });

  it('should calculate the multiplicative persistence', () => {
    expect(MultiplicativePersistence.calc(0)).toBe(0);
    expect(MultiplicativePersistence.calc(123)).toBe(1);
    expect(MultiplicativePersistence.calc(3245)).toBe(2);
    expect(MultiplicativePersistence.calc(5499)).toBe(2);
    expect(MultiplicativePersistence.calc(7845)).toBe(2);
    expect(MultiplicativePersistence.calc(277777788888899)).toBe(11);
    // expect(MultiplicativePersistence.calc(77777733332222222222222222222)).toBe(11);
  });

  it('should calculate MP recursively', () => {
    expect(MultiplicativePersistence.calcRecursive(0)).toBe(0);
    expect(MultiplicativePersistence.calcRecursive(123)).toBe(1);
    expect(MultiplicativePersistence.calcRecursive(3245)).toBe(2);
    expect(MultiplicativePersistence.calcRecursive(5499)).toBe(2);
    expect(MultiplicativePersistence.calcRecursive(7845)).toBe(2);
    expect(MultiplicativePersistence.calcRecursive(277777788888899)).toBe(11);
    // expect(MultiplicativePersistence.calcRecursive(77777733332222222222222222222)).toBe(11);
  });
});

export class MultiplicativePersistence {
  static calc(n: number): number {
    let count = 0;
    while (n >= 10) {
      n = this.calcStage(n);
      count++;
    }
    return count;
  }

  static calcStage(n: number): number {
    let acc = 1;
    do {
      acc *= n % 10;
      n = Math.trunc(n / 10);
    } while (n !== 0) 
    return acc;
  }

  static calcStageRecursive(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      let acc = n % 10;
      return this.calcStageRecursive(Math.trunc(n/10)) * acc;
    }
  }

  static calcRecursive(n: number): number {
    return n < 10 ? 0 : this.calcRecursive(this.calcStageRecursive(n)) + 1;
  }
}
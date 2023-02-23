export function calculator(a: number, b: number) {
  return {
    add: a + b,
    _substract: a - b,
    get substract() {
      return this._substract;
    },
    set substract(value) {
      this._substract = value;
    },
    multiply: a * b,
    divide: a / b,
  };
}


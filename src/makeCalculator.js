'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    get result() {
      return result;
    },

    operate(callBack, operator) {
      callBack(operator);

      return this;
    },

    add(operator) {
      result += operator;

      return this;
    },

    subtract(operator) {
      result -= operator;

      return this;
    },

    multiply(operator) {
      result *= operator;

      return this;
    },

    divide(operator) {
      result /= operator;

      return this;
    },

    reset() {
      result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

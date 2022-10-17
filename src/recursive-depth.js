const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  deep = 0;

  calculateDepth(arr, deepCalc = -1) {
    
    if (deepCalc == -1) {
      this.deep = 1;
      deepCalc = 1;
    }
    if (deepCalc > this.deep) this.deep = deepCalc;
    arr.forEach((element) => {
      if (typeof element == "object")
        this.calculateDepth(element, deepCalc + 1);
    });
    return this.deep;
  }
}

module.exports = {
  DepthCalculator,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arguments);
  let arrRes = [];
  let count = 0;

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrClone = Array.from(arr);
  let find = arrClone.find(
    (el) =>
      el == "--double-next" ||
      el == "--double-prev" ||
      el == "--discard-prev" ||
      el == "--discard-next"
  );

  if (find === undefined) {
    return arr;
  }

  if (arrClone[0] == "--discard-prev" || arrClone[0] == "--double-prev") {
    arrRes = arrClone;
    return arrRes.splice(1, arrRes.length - 1);
  }
  if (
    arrClone[arrClone.length - 1] == "--double-next" ||
    arrClone[arrClone.length - 1] == "--discard-next"
  ) {
    arrRes = arrClone;
    return arrRes.splice(0, arrRes.length - 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (Number(arrClone[i])) {
      arrRes.push(arrClone[i]);
    }
    if (arrClone[i] == "--double-next") {
      arrRes.push(arrClone[i + 1]);
    }
    if (arrClone[i] == "--double-prev") {
      arrRes.push(arr[i - 1]);
    }
    if (arrClone[i] == "--discard-prev") {
      arrRes.splice(i - 1, 1);
    }
    if (arrClone[i] == "--discard-next") {
      count = i;
    }
  }
  if (arrClone[count] == "--discard-next") {
    arrRes.splice(count, 1);
  }

  if (
    arrClone[count] == "--discard-next" &&
    arrClone[count + 2] == "--double-prev"
  ) {
    arrRes.splice(count, 1);
  }

  if (
    arrClone[count] == "--discard-next" &&
    arrClone[count + 1] == "--discard-prev"
  ) {
    arrRes.splice(count, 2);
  }
  return arrRes;
}

module.exports = {
  transform,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-");
  if (arr.length != 6) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!is16(arr[i])) {
      return false;
    }
  }
  return true;
}

function is16(m) {
  if (m == "00") {
    return true;
  }
  let num = parseInt(m, 16);
  if (!num) {
    return false;
  }
  if (num < 16) {
    return m.length == 2;
  }
  return num < 256;
}
module.exports = {
  isMAC48Address,
};

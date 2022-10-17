const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let allDoms = domains.map((domain) =>
    domain
      .split(".")
      .reverse()
      .map((el, i, ar) => {
        let str = "";
        for (let j = 0; j <= i; j++) {
          str += `.${ar[j]}`;
        }
        return str;
      })
  );

  let obj = {};
  for (let i = 0; i < allDoms.length; i++) {
    for (let j = 0; j < allDoms[i].length; j++) {
      !obj[allDoms[i][j]] ? (obj[allDoms[i][j]] = 1) : obj[allDoms[i][j]]++;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};

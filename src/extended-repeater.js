const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strRes = "";

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }

  let repeatTimes = options.repeatTimes,
    separator = options.separator,
    addition = String(options.addition),
    additionRepeatTimes = options.additionRepeatTimes,
    additionSeparator = options.additionSeparator;

  if (repeatTimes > 1 && additionRepeatTimes > 1) {
    strResSub = (str + (addition + additionSeparator).repeat(additionRepeatTimes) + separator).repeat(repeatTimes)
    strRes = strResSub.substr(0, strResSub.length - separator.length - additionSeparator.length)
    

  } else if (repeatTimes == 1 && additionRepeatTimes > 1) {
    strRes = (str + addition.repeat(additionRepeatTimes) + additionSeparator).repeat(repeatTimes)

  } else if (repeatTimes > 1 && additionRepeatTimes == 1) {
    strResSub = (str + addition + separator).repeat(repeatTimes)
    strRes = strResSub.substr(0, strResSub.length - separator.length)


  } else {
    strRes = str + addition

  }

  return strRes
}

module.exports = {
  repeater,
};

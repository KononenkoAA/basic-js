const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (isNaN(date instanceof Date)) {
      throw new Error("Invalid date!");
    }
    if (!date || date === undefined || date === null) {
      return "Unable to determine the time of year!";
    }
    let proto = Object.keys(date)
    if(proto.length > 0){
      throw new Error("Invalid date!");
    }

    let month = date.getMonth();

    switch (month) {
      case 11:
      case 0:
      case 1:
        return "winter";
      case 2:
      case 3:
      case 4:
        return "spring";
      case 5:
      case 6:
      case 7:
        return "summer";
      case 8:
      case 9:
      case 10:
        return "autumn (fall)";
    }
  } catch (err) {
    throw new Error("Invalid date!");
  }
  if(date.PrototypeOf){
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};

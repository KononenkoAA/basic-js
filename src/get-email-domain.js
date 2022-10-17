const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = ''
  let arr = email.split('@')
  let index = email.lastIndexOf('@')
   res = email.slice(index+1)
   return res
}

module.exports = {
  getEmailDomain
};

const { NotImplementedError } = require('../extensions/index.js');

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

function expandDomain(domain) {
  let elems = domain.split('.')
  let result = [];
  for (let i = 0; i < elems.length; i++)
    elems[i] = '.' + elems[i];

  let tiny = '';
  for (let i = elems.length-1; i >= 0; i--) {
    tiny = tiny + elems[i];
    result.push(tiny);
  }

  return result;
}

function calcElementCount(arr, elem) {
  let result = 0
  arr.forEach(e => {
    if (e==elem)
      result++;
  });
  return result;
}

function getDNSStats(domains) {
  result = new Object();
  let expandedDomains = [];

  for (let i = 0; i < domains.length; i++) {
    expandDomain(domains[i]).forEach(e => {
      expandedDomains.push(e);
    });;
  }

  expandedDomains.forEach(elem => {
    result[elem] = calcElementCount(expandedDomains, elem);
  });

  return result;
  
}

module.exports = {
  getDNSStats
};

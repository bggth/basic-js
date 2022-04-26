const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (typeof sampleActivity != 'string')
    return false;
  sampleActivity = parseFloat(sampleActivity)

  if ((sampleActivity > MODERN_ACTIVITY) | (sampleActivity <=0) | (sampleActivity===NaN))
    return false;

  let result = 0;

  console.log('sampleActivity', parseFloat(sampleActivity), sampleActivity);

  result = Math.trunc(1+Math.log(sampleActivity / MODERN_ACTIVITY) / -(0.693 / HALF_LIFE_PERIOD));

  return result;

}

module.exports = {
  dateSample
};

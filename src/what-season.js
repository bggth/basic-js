const { NotImplementedError } = require('../extensions/index.js');

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

  //if (typeof date != string)
    //return 'Invalid date!';    

  let testDate = new Date(date);


  if (testDate == 'undefined')
  {
    //throw new Error('Invalid date!');
    console.error('Invalid date!');
    return true;
  }
    //return 'Invalid date!';

  let month = testDate.getMonth();
  //console.log(date, testDate, month);

  if ((month==11) || (month==0) || (month==1)) 
    return 'winter';

  if ((month==2) || (month==3) || (month==4)) 
    return 'spring';

  if ((month==5) || (month==6) || (month==7)) 
    return 'summer';

  if ((month==8) || (month==9) || (month==10)) 
    return 'autumn';

  return true;
  //console.log(date);
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  let result = []


  // check members is array
  if ((typeof members != 'object') || (members==null))
    return false;
    
  if (members.length == undefined)
    return false;

  members.forEach(member => {
    if (typeof member == 'string')
      result.push(member.trim()[0].toUpperCase());
  });
  
  let resultString = '';
  result.sort().forEach(elem => {
    resultString = resultString + elem;
  })

  return resultString;
}

module.exports = {
  createDreamTeam
};

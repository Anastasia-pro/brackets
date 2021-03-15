module.exports = function check(str, bracketsConfig) {
    let ArrBrackets = [];
    let ensign;
    for (let i = 0; i < bracketsConfig.length; i++) {
        ArrBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    } 
    do {
        ensign = false;
      for (let k = 0; k < ArrBrackets.length; k++) {
        if (str.indexOf(ArrBrackets[k]) !== -1) {
          str = str.replace(ArrBrackets[k], '');
          ensign = true;
        }
      }
    }
    while ((str.length !== 0) && (ensign !== false));
    return ensign;
  }

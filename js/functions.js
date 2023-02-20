
// Функция для проверки длины строки

const getLengthStroke = function (verifyStroke, numberStroke) {
  if (verifyStroke.length <= numberStroke) {
    return true;
  }
  return false;
};

getLengthStroke();

// Функция для проверки строки на палиндром

const palindromeChecker = function(someStroke) {
  const reverseStroke = someStroke.toLowerCase().split('').reverse().join('');
  if (someStroke.toLowerCase() === reverseStroke) {
    return true;
  }
  return false;
};

palindromeChecker();


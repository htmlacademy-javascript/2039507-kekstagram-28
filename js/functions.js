
// Функция для проверки длины строки

const getLengthStroke = function (verifyString, numberString) {
  if (verifyString.length <= numberString) {
    return true;
  }
  return false;
};

getLengthStroke();

// Функция для проверки строки на палиндром

const palindromeChecker = (someString) => {
  const upgradeString = someString
    .toLowerCase()
    .replaceAll(' ','');

  let reverseString = '';
  for (let i = upgradeString.length - 1; i >= 0; i--) {
    reverseString += upgradeString.at(i);
  }
  return upgradeString === reverseString;
};
palindromeChecker();

// Функция возвращающая числа


const getNumber = function(someStroke) {
  const number = someStroke.split('').Number().join('');
  if (number === true) {
    return number;
  }
  return NaN;
};

getNumber();

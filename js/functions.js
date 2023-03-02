
// Функция для проверки длины строки

const getString = (someString, numberString) => someString.length <= numberString;
getString();

// Функция для проверки строки на палиндром

const palindromeChecker = (someString) => {
  const upgradeString = someString
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = upgradeString.length - 1; i >= 0; i--) {
    reverseString += upgradeString.at(i);
  }
  return upgradeString === reverseString;
};

palindromeChecker();

// Функция возвращающая числа


const getNumber = function (someString) {

  let result = '';
  for (let i = 0; i < someString.length; i++) {
    if (!Number.isNaN(parseInt(someString.at(i), 10))) {
      result += someString.at(i);
    }
  }
  return parseInt(result, 10);
};

getNumber();

// Функция, которая принимает три параметра

const padStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

padStart();



const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const higher = Math.floor(Math.max(a, b));
  const result = Math.random() * (higher - lower + 1) + lower;
  return Math.floor(result);
};

// Создаем генератор случ.элементов массива

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export { getRandomNumber, getRandomArrayElement };



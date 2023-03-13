import { getRandomNumber, getRandomArrayElement } from './utilites.js';

const OBJECT_MAX = 25;
const PICTURE_COUNT_MIN = 1;
const PICTURE_COUNT_MAX = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const IDMAX = 1000;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
  'Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Никогда не ищите свое счастье там, где вы его однажды потеряли.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.',
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.',
  'Живите во всех тех моментах, которые вы не можете выразить словами.'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Игорь',
  'Ксюша',
  'Люси',
  'Владимир',
  'Павел'
];

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
  'Сушко',
  'Озеречко',
  'Кетано',
  'Мелько'
];

const getComments = () => {
  const randomIdComment = getRandomNumber(0, IDMAX);
  const randomAvatar = getRandomNumber(1, AVATAR_COUNT);
  const randomMessage = getRandomArrayElement(COMMENT_LINES);
  const randomNameIndex = getRandomArrayElement(NAMES);
  const randomSurnameIndex = getRandomArrayElement(SURNAMES);

  return {
    id: randomIdComment,
    avatar: `img/avatar-${[randomAvatar]}.svg`,
    message: randomMessage,
    name: `${ NAMES[randomNameIndex]} ${ SURNAMES[randomSurnameIndex]}`
  };
};


const getPhoto = () => {
  const createRandomId = getRandomNumber(PICTURE_COUNT_MIN, PICTURE_COUNT_MAX);
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const likesCounter = getRandomNumber(LIKE_MIN, LIKE_MAX);

  return {
    id: createRandomId,
    url: `photos/${ createRandomId }.jpg`,
    description: randomDescription,
    likesCounter: likesCounter,
    comments: [getComments()]
  };
};

const createPhotoArray = () => Array.from({ length: OBJECT_MAX }, getPhoto);

export { createPhotoArray };

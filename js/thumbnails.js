
const thumbnailContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url, description, comments, likesCounter}) => {

  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likesCounter;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  thumbnailContainer.append(fragment);
};

export { renderThumbnails };

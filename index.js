const imagesContainer = document.getElementById('imagesContainer');

const imagesArr = [
  'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288879.jpg',
  'https://m.media-amazon.com/images/M/MV5BMDU4ODc1M2UtODg3Ny00NDViLTkxNmQtMzMzZWM1NGRmYTNjXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg',
  'https://dotesports.com/wp-content/uploads/2022/12/08230958/cyberpunk-2077-multiplayer.large_.jpg?w=1200',
  'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ca30c1518a7c11de97d29d24462323e6188bf6e7ff2d65721810eaa8bc799702._UY500_UX667_RI_TTW_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMDkxMGYyNTktM2U4ZS00NTAyLWFhNzItMDQ0YzRlYzQ0YjM1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg',
];

//first image starts at 0px hence -1
const imagesInArray = imagesArr.length - 1;
const flexBoxGaps = imagesInArray * 200;
const totalSliderWidth = imagesContainer.offsetWidth + flexBoxGaps;
const pixelsToMove = totalSliderWidth / imagesInArray;

imagesArr.forEach((image, index) => {
  const navDotsContainer = document.querySelector('.navigation-dots-container');
  const img = document.createElement('img');
  img.setAttribute('src', image);

  const navDot = document.createElement('li');
  if (index === 0) navDot.classList.add('active');
  navDot.classList.add('dot');
  navDot.dataset.index = index;
  navDotsContainer.appendChild(navDot);

  imagesContainer.appendChild(img);
});

const navDots = document.querySelectorAll('.dot');
navDots.forEach((navDot, index) => {
  navDot.addEventListener('click', () => {
    moveSlide(index);
  });
});
function moveSlide(position) {
  updateNavigationDots(position);
  const moveAmount = position * pixelsToMove;
  imagesContainer.style.translate = `-${moveAmount}px`;
  console.log(moveAmount);
}
function updateNavigationDots(index) {
  navDots.forEach((navDot, dotIndex) => {
    navDot.classList.toggle('active', dotIndex === index);
  });
}
const arrowRight = document.querySelector('.arrow-right');
arrowRight.addEventListener('click', next);

const arrowLeft = document.querySelector('.arrow-left');
arrowLeft.addEventListener('click', previous);

function next() {
  let activeSlideIndex = Number(
    document.querySelector('.active').dataset.index
  );
  activeSlideIndex === imagesInArray
    ? moveSlide(0)
    : moveSlide(activeSlideIndex + 1);
}

function previous() {
  let activeSlideIndex = Number(
    document.querySelector('.active').dataset.index
  );
  activeSlideIndex === 0
    ? moveSlide(imagesInArray)
    : moveSlide(activeSlideIndex - 1);
}

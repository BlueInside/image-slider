const imagesContainer = document.getElementById('imagesContainer');

const imagesArr = [
  'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&h=400',
  'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&h=400',
  'https://images.unsplash.com/photo-1626548307930-deac221f87d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&h=400',
  'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&h=400',
  'https://images.unsplash.com/photo-1534278931827-8a259344abe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&h=400',
];

//first image starts at 0px hence -1
const imagesInArray = imagesArr.length - 1;
const flexBoxGaps = imagesInArray * 10;
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
  imagesContainer.style.transform = `translateX(-${moveAmount}px)`;
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
function changeSlide() {
  next();
  setTimeout(changeSlide, 5000);
}
changeSlide();

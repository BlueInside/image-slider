const sliderContainer = document.getElementById('sliderContainer');

const imagesArr = [
  'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288879.jpg',
  'https://m.media-amazon.com/images/M/MV5BMDU4ODc1M2UtODg3Ny00NDViLTkxNmQtMzMzZWM1NGRmYTNjXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg',
  'https://dotesports.com/wp-content/uploads/2022/12/08230958/cyberpunk-2077-multiplayer.large_.jpg?w=1200',
  'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ca30c1518a7c11de97d29d24462323e6188bf6e7ff2d65721810eaa8bc799702._UY500_UX667_RI_TTW_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMDkxMGYyNTktM2U4ZS00NTAyLWFhNzItMDQ0YzRlYzQ0YjM1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg',
];

imagesArr.forEach((image) => {
  const img = document.createElement('img');
  img.setAttribute('src', image);

  sliderContainer.appendChild(img);
});

function next() {
  let sliderPosition = sliderContainer.style.translate || '0px';
  // style image container with css right property add val
  const sliderPositionAsNumber = Number(
    sliderPosition.slice(0, -2) //remove px
  );
  sliderPosition = `${sliderPositionAsNumber - 300}px`;

  sliderContainer.style.translate = sliderPosition;
}

function previous() {
  let sliderPosition = sliderContainer.style.translate || '0px';
  // style image container with css right property add val
  const sliderPositionAsNumber = Number(
    sliderPosition.slice(0, -2) //remove px
  );
  sliderPosition = `${sliderPositionAsNumber + 300}px`;

  sliderContainer.style.translate = sliderPosition;
}

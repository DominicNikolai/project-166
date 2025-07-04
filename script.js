const $ = el => document.querySelector(el);
const $hero = $('.hero');
const TOTAL_FRAMES = 100;

function generateSrc(nFrame) {
  return `./assets/frames/ezgif-frame-${nFrame.toString().padStart(3,'0')}.jpg`;
}

function updateImage(nFrame) {
  const src = generateSrc(nFrame);
  $hero.style.setProperty('--bg-portada', `url('${src}')`);
}

function preloadImages() {
  Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const currentFrame = i + 1;
    const img = document.createElement('img');
    img.src = generateSrc(currentFrame);
  });
}

function showFrames(e) {
  const htmlHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollRest = htmlHeight - viewportHeight;
  const percentOfTotalScroll = window.scrollY / scrollRest;
  let numberOfFrame = ~~(percentOfTotalScroll * TOTAL_FRAMES) + 1;
  if (numberOfFrame > TOTAL_FRAMES) {
    numberOfFrame = TOTAL_FRAMES;
  }
  updateImage(numberOfFrame);
}

document.addEventListener('DOMContentLoaded', preloadImages);
window.addEventListener('scroll', showFrames);

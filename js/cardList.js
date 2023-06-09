const cardList = document.querySelector('.card-list');
let isDown = false;
let startX;
let scrollLeft;

cardList.addEventListener('mousedown', (e) => {
  isDown = true;
  cardList.classList.add('active');
  startX = e.pageX - cardList.offsetLeft;
  scrollLeft = cardList.scrollLeft;
});

cardList.addEventListener('mouseleave', () => {
  isDown = false;
  cardList.classList.remove('active');
});

cardList.addEventListener('mouseup', () => {
  isDown = false;
  cardList.classList.remove('active');
});

cardList.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardList.offsetLeft;
  const walk = (x - startX) * 90000; // ajuste a sensibilidade do arraste aqui
  cardList.scrollLeft = scrollLeft - walk;
});

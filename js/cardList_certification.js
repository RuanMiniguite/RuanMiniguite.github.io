const cardListC = document.querySelector('.card-list-certification');
let isDown = false;
let startX;
let scrollLeft;

cardListC.addEventListener('mousedown', (e) => {
  isDown = true;
  cardListC.classList.add('active');
  startX = e.pageX - cardListC.offsetLeft;
  scrollLeft = cardListC.scrollLeft;
});

cardListC.addEventListener('mouseleave', () => {
  isDown = false;
  cardListC.classList.remove('active');
});

cardListC.addEventListener('mouseup', () => {
  isDown = false;
  cardListC.classList.remove('active');
});

cardListC.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardListC.offsetLeft;
  const walk = (x - startX) * 10; // ajuste a sensibilidade do arraste aqui
  cardListC.scrollLeft = scrollLeft - walk;
});


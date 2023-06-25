const cardListP = document.querySelector('.card-list-projects');
let isDown_P = false;
let startX_P;
let scrollLeft_P;

cardListP.addEventListener('mousedown', (e) => {
  isDown_P = true;
  cardListP.classList.add('active');
  startX_P = e.pageX - cardListP.offsetLeft;
  scrollLeft_P = cardListP.scrollLeft;
});

cardListP.addEventListener('mouseleave', () => {
  isDown_P = false;
  cardListP.classList.remove('active');
});

cardListP.addEventListener('mouseup', () => {
  isDown_P = false;
  cardListP.classList.remove('active');
});

cardListP.addEventListener('mousemove', (e) => {
  if (!isDown_P) return;
  e.preventDefault();
  const x = e.pageX - cardListP.offsetLeft;
  const walk = (x - startX_P) * 10; // ajuste a sensibilidade do arraste aqui
  cardListP.scrollLeft = scrollLeft_P - walk;
});
const resumeButton = document.querySelector('.glowheader');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
const speed = 0.1;

function updatePosition() {
  let distX = mouseX - posX;
  let distY = mouseY - posY;
  posX += (distX * speed);
  posY += (distY * speed);
  resumeButton.style.setProperty('--x', posX + 'px');
  resumeButton.style.setProperty('--y', posY + 'px');
  requestAnimationFrame(updatePosition);
}

updatePosition();

resumeButton.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

resumeButton.addEventListener('mouseenter', () => {
  resumeButton.classList.add('glow');
});

resumeButton.addEventListener('mouseleave', () => {
  resumeButton.classList.remove('glow');
});

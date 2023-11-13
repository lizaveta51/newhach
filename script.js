const character = document.getElementById('character');
let isJumping = false;

document.addEventListener('keydown', jump);

function jump(event) {
  if (event.code === 'Space' && !isJumping) {
    isJumping = true;
    jumpUp();
  }
}

function jumpUp() {
  let position = 0;
  
  const jumpInterval = setInterval(() => {
    if (position === 100) {
      clearInterval(jumpInterval);
      jumpDown();
    } else {
      position += 5;
      character.style.bottom = position + 'px';
    }
  }, 20);
}

function jumpDown() {
  let position = 100;

  const fallInterval = setInterval(() => {
    if (position === 0) {
      clearInterval(fallInterval);
      isJumping = false;
    } else {
      position -= 5;
      character.style.bottom = position + 'px';
    }
  }, 20);
}

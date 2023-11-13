const character = document.getElementById('character');
const obstacle = document.querySelector('.obstacle');
let isJumping = false;
let isGoingRight = false;
let isGoingLeft = false;

document.addEventListener('keydown', control);
document.addEventListener('keyup', stopControl);

function control(event) {
  if (event.code === 'Space' && !isJumping) {
    isJumping = true;
    jumpUp();
  }
  if (event.code === 'ArrowRight' && !isGoingLeft) {
    isGoingRight = true;
    moveRight();
  }
  if (event.code === 'ArrowLeft' && !isGoingRight) {
    isGoingLeft = true;
    moveLeft();
  }
}

function stopControl(event) {
  if (event.code === 'ArrowRight') {
    isGoingRight = false;
  }
  if (event.code === 'ArrowLeft') {
    isGoingLeft = false;
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

function moveRight() {
  let position = 0;

  const moveRightInterval = setInterval(() => {
    if (position === 300) {
      clearInterval(moveRightInterval);
      isGoingRight = false;
    } else {
      position += 5;
      character.style.left = position + 'px';
    }
  }, 20);
}

function moveLeft() {
  let position = 0;

  const moveLeftInterval = setInterval(() => {
    if (position === -300) {
      clearInterval(moveLeftInterval);
      isGoingLeft = false;
    } else {
      position -= 5;
      character.style.left = position + 'px';
    }
  }, 20);
}

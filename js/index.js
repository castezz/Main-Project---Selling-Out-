function hideShowMenu() {
  const nav = document.getElementById('my-menu');
  nav.style.transitionDuration = '1s';
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
}

function onHover() {
  const image = document.getElementById('logo');
  image.src = 'img/ps-retro-logo.png';
}

function offHover() {
  const image = document.getElementById('logo');
  image.src = 'img/ps5.png';
}

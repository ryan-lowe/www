// Set initial theme based on local time
const hour = new Date().getHours();
if (hour >= 19 || hour < 6) {
  document.body.classList.add('dark');
}

function toggle() {
  document.body.classList.add('animation-ready');
  document.body.classList.toggle('dark');
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    toggle();
  }
});


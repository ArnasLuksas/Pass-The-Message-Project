const button = document.querySelector('button');
const show = document.querySelector('.show');
const msg = document.querySelector('.msg');

button.addEventListener('click', () => {
  const input = document.querySelector('input').value;
  if (input) {
    msg.innerHTML = input;
  } else if (input === '') {
    show.style.display = 'block';
    setTimeout(() => {
      show.style.display = 'none';
    }, 2000);
  }
});

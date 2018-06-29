// FUNCTION FOR RUNNING TIMESTAMP AND RETURNING TIME IN 12 HR FORMAT WITH AM/PM AFTER
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let meridies = 'am';
  if (hour > 12) {meridies = 'pm';};
  if (hour > 12) {hour = hour - 12;};
  return hour + ':' + minute + meridies;
}

// CREATE A VARIABLE THAT STORES THE VALUE OF THE INPUT AFTER THE CLICK OF THE BUTTON
let input = document.getElementById('input');
let inner = document.getElementById('inner');

function post() {
  let p = document.createElement('p');
  inner.appendChild(p);
  let img = document.createElement('img');
  img.setAttribute('class', 'pr-2');
  img.src = 'image/user.png';
  img.alt = 'User image.';
  p.appendChild(img);
  p.textContent = input.value;
  let span = document.createElement('span');
  p.appendChild(span);
  input.value = '';
}

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

// CREATE A VARIABLE THAT STORES THE VALUE OF THE INPUT
let input = document.getElementById('input');
// CREATE A VARIABLE THAT STORES DIV WITH ID OF INNER
let inner = document.getElementById('inner');

// CREATE MAIN FUNCTION THAT ADDS A PARAGRAPH TO THE BODY AND INPUTS THE VALUE OF THE MAIN INPUT INTO THE NEWLY CREATED PARAGRAPH
function post() {
  // VARIABLE FOR PARAGRAPH
  let p = document.createElement('p');
  inner.appendChild(p);
  p.textContent = input.value;
  // VARIABLE FOR IMAGE
  let img = document.createElement('img');
  img.setAttribute('class', 'pr-2');
  img.src = 'image/user.png';
  img.alt = 'User image.';
  p.appendChild(img);
  // VARIABLE FOR SPAN
  let span = document.createElement('span');
  p.appendChild(document.createTextNode(span));
  // RESET VALUE OF INPUT TO BLANK
  input.value = '';
}

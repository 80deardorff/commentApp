// FUNCTION FOR RUNNING TIMESTAMP AND RETURNING TIME IN 12 HR FORMAT WITH AM/PM AFTER
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let meridies = 'am';
  if (hour > 12) {meridies = 'pm';};
  if (hour > 12) {hour = hour - '12';};
  if (minute < 10) {minute = '0' + minute;};
  return hour + ':' + minute + meridies;
}

// CREATE A VARIABLE THAT STORES THE VALUE OF THE INPUT
let input = document.getElementById('input');
// CREATE A VARIABLE THAT STORES DIV WITH ID OF INNER
let inner = document.getElementById('inner');

// CREATE MAIN FUNCTION THAT ADDS A PARAGRAPH TO THE BODY AND INPUTS THE VALUE OF THE MAIN INPUT INTO THE NEWLY CREATED PARAGRAPH
function post() {
  // VARIABLE FOR IMAGE
  let div1 = document.createElement('div');
  div1.setAttribute('class', 'one col-1' );
  inner.appendChild(div1);
  let img = document.createElement('img');
  img.src = 'image/user.png';
  img.alt = 'User image.';
  div1.appendChild(img);
  // VARIABLE FOR A DIV
  let div2 = document.createElement('div');
  div2.setAttribute('class', 'two col-11');
  inner.appendChild(div2);
  // VARIABLE FOR PARAGRAPH
  let p = document.createElement('p');
  div2.appendChild(p);
  p.textContent = input.value;
  // VARIABLE FOR SPAN
  let span = document.createElement('span');
  div2.appendChild(span);
  span.textContent = ' ' + currentTime() + ' ';
  // VARIABLE FOR HEART ICON
  let i = document.createElement('i');
  i.setAttribute('class', 'fas fa-heart');
  div2.appendChild(i);
  // RESET VALUE OF INPUT TO BLANK
  input.value = '';
  // SCROLL TO BOTTOM OF DIV
  inner.scrollTo(0, inner.scrollHeight);
}

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("myBtn").click();
  }
});

// WHY DOESNT THIS WORK?
//
// function accept() {
//   if (input.value = "") {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }

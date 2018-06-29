// FUNCTION FOR RUNNING TIMESTAMP AND RETURNING TIME IN 12 HR FORMAT WITH AM/PM AFTER
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let meridies = 'am';
  if (hour > 12) {meridies = 'pm';};
  if (hour > 12) {hour = hour - 12;};
  return hour + ':' + minute + ' ' + meridies;
}

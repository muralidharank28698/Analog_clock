setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

//Clock Function

// var time = setInterval(clock);
// setInterval(() => {
//   d = new Date();
//   sec = d.getSeconds();
//   min = d.getMinutes();
//   hr = d.getHours();

//   document.getElementById("hour").style.transform =
//     "rotate(" + hr * 30 + min / 2 + "deg)";
//   document.getElementById("minute").style.transform =
//     "rotate(" + min * 6 + "deg)";
//   document.getElementById("second").style.transform =
//     "rotate(" + sec * 6 + "deg)";
// }, 1000);

// var time = setInterval(clock);
// function clock() {
//   d = new Date();
//   sec = d.getSeconds();
//   min = d.getMinutes();
//   hr = d.getHours();

//   document.getElementById("hour").style.transform =
//     "rotate(" + hr * 30 + "deg)";
//   document.getElementById("minute").style.transform =
//     "rotate(" + min * 6 + "deg)";
//   document.getElementById("second").style.transform =
//     "rotate(" + sec * 6 + "deg)";
// }

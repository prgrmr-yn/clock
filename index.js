window.setInterval(func, 1000);

function func() {
  let d = new Date().toString();
  let time = d.slice(16,24);
  console.log(time);
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = 'Little progress everyday';
}

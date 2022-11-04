window.setInterval(func, 1000);

function func() {
  let d = new Date().toString();
  let time = d.slice(16,24);
  console.log(d);
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = d.slice(0,16);
}

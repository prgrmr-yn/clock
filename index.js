window.setInterval(func, 1000);

function func() {
  let d = new Date();
  let time = d.toLocaleTimeString()
  time = time.includes('M')? time.slice(0,7): time
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}

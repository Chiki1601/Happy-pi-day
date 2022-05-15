let i = 0;
let pi = '3.141592653589793238462';
let speed = 200;

function type() {
  if (i < pi.length) {
    document.getElementById('type').innerHTML += pi.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

type();
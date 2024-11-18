let secondhand = document.getElementById('second-hand');
var clockEl = document.getElementsByClassName('clock')[0];
let input = document.querySelector('.day');
let output = document.getElementsByClassName('output');
let dialLines = document.getElementsByClassName('dialLines');


for (var i = 1; i < 360; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + i + "deg)";
}

let degree=0
function clock(side) {

  if(side>750){
    degree++
  }else{
    if(degree<0){
      degree=720 
    }
    degree--
  }
    dayEl = document.querySelector('.day');
    dayEl.innerHTML=degree%360;
    dateEl = document.querySelector('.date'),
    dateEl.innerHTML = degree%720;
      sEl = document.querySelector('.second-hand'),
  sEl.style.transform = "rotate("+degree+"deg)";
 }



document.onmousemove = (event) => {

    var x = event.clientX ;
    clock(x) 
}



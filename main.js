const volume = document.querySelector(".volume");
const input = document.querySelector("input");
const fail = document.querySelector(".fail");
const PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
let vol = 0;
let correct = true;
input.addEventListener('keydown', function(){
  let keyCode = event.keyCode;
  let value = input.value + String.fromCharCode(keyCode);
  console.log(value);

  if (correct){
    vol++;
    volume.innerHTML = vol;
  }

  if (value.length === 2 && keyCode === 190){}
  else if (keyCode === 8 && value.substring(0,value.length-2) === "") {
    reset();
  }
  else if (value !== PI.substring(0, value.length)){
    wrongPress();
  }
});

function wrongPress(){
  fail.style.display = "block";
  correct = false;
  vol = 0;
  volume.innerHTML = vol;
}
function reset(){
  fail.style.display = "none";
  correct = true;
}

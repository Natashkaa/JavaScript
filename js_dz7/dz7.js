/*1*/
let ball = document.getElementById('ball');

document.addEventListener('click', function(event){
    let x = event.clientX;
    let y = event.clientY;
    
    if(x <= 85 || x - 85 < ball.clientWidth / 2){
        x = 85 + ball.clientWidth / 2;
    }
    if(y <= 60 || y - 60 < ball.clientHeight/ 2){
        y = 60 + ball.clientHeight / 2
    }
    if(x >= 1830 || 1830 - x < ball.clientWidth / 2){
        x  = 1830 - ball.clientWidth / 2
    }
    if(y >= 865 || 865 - y < ball.clientHeight/ 2){
        y = 865 - ball.clientHeight / 2
    }

    let coords = {
        x: x - ball.clientWidth / 2,
        y: y - ball.clientHeight / 2
    }
    ball.style.left = coords.x + 'px';
    ball.style.top = coords.y + 'px'
});
/*2*/
let lamps = document.getElementsByClassName("lamp");
let current = 1;
let last = current - 1;
let color = ["rgb(255, 2, 2)", "rgb(255, 251, 2)", "rgb(103, 255, 2)", "rgba(110, 110, 110, 0.685)"];
tl_btn.onclick = function() {
    if(current > lamps.length-1) {
        last = current - 1;
        current = 0;
    }
    if(last > lamps.length - 1){
        last = 0;
    }
    lamps[current].style.backgroundColor = color[current];
    lamps[last].style.backgroundColor = color[color.length-1];
    current++;
    last++;
}
/*3*/
let selectedLi;
book_list.onclick = function(event) {
    let curLi = event.target.closest('li');
    if(!curLi)  return;

    if(!book_list.contains(curLi)) return;
  
    highlight(curLi); // подсветить TD
  };
  
  function highlight(curLi) {
    if (selectedLi) { // убрать существующую подсветку, если есть
        selectedLi.style.backgroundColor = "transparent";
    }
    selectedLi = curLi;
    selectedLi.style.backgroundColor = "rgb(148, 221, 148)";
  }
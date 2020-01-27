/*1*/
let elements = document.querySelectorAll('ul > li > a');
elements.forEach( function(e) { 
    var regV1 = /https:\/\//g; 
    var regV2 = /http:\/\//g; 
    if(e.text.match(regV1) || e.text.match(regV2)){
        return e.className = "liiDot";
    }
    else{
        return e.className = "liiClear";
    }
});
/*2*/
var buttonLiArr = document.getElementsByClassName("opend");
for (let i = 0; i < buttonLiArr.length; i++) {
    buttonLiArr[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
  });
}

/*3*/
let key;
let ind1 = 0;
let ind2 = 0;
let selectedLi;
document.addEventListener('keydown', function(event) {
        //key = event;
        if (event.ctrlKey && event.keyCode == 69) {
            event.preventDefault();
            event.stopPropagation();
            changeText();
        }
        else if (event.ctrlKey && event.keyCode == 83) {
            event.preventDefault();
            event.stopPropagation();
            saveText();
        }
        else{ key = event;}
});
document.addEventListener('keyup', function(event) {
    key = undefined;
});

var books = document.querySelectorAll('.book-list > li');
book_list.onclick = function(event) {
    let curLi = event.target.closest('li');
    if(!curLi)  return;

    if(!book_list.contains(curLi)) return;
    
    highlight(curLi);
  };
function highlight(curLi) {
    if(key){
        if(key.ctrlKey){
            for (let i in books) {
                if(books[i] == curLi){
                    ind1 = i;
                    break;
                }
            }
            books[ind1].classList.toggle("orangeLi");  
        }
        else if(key.key == "Shift"){
            for (let i in books) {
                if(books[i] == curLi){
                    ind2 = i;
                    break;
                }
            }
            if(ind1 > ind2){
                for(ind2; ind2 <= ind1; ind2++){
                    books[ind2].classList.add("orangeLi");
                }
            }
            else{
                for(ind2; ind2 >= ind1; ind2--){
                    books[ind2].classList.add("orangeLi");
                }
            }
        }
    }
    else{
        books.forEach(x => x.classList.remove("orangeLi"));
        curLi.classList.add("orangeLi");
    }
    key = undefined;
};
/*4*/
let textDiv = document.getElementById("some_text");
let textArea = document.getElementById("txt_area");
let text = textDiv.innerText;
function changeText(){
    textArea.classList.add("show-textarea");
    textArea.value = text;
    textDiv.classList.add("hide-textdiv");
};
function saveText(){
    if(textDiv.classList.contains("hide-textdiv")){
        text = textArea.value;
        textArea.classList.remove("show-textarea");
        textDiv.innerText = text;
        textDiv.classList.remove("hide-textdiv");
    }
}
/*5*/
var sort_tbl = document.getElementsByClassName("sort");
for(let i = 0; i < sort_tbl.length; i++){
    sort_tbl[i].onclick = function(event) {
        let ind = event.currentTarget.cellIndex;
        if(ind == 2)
        {
            let sortedRows = Array.from(table.rows)
                                .slice(1)
                                    .sort((rowA, rowB) => parseInt(rowA.cells[ind].innerHTML) > parseInt(rowB.cells[ind].innerHTML) ? 1 : -1);
            table.tBodies[0].append(...sortedRows);
            return;
        }
        else{
            let sortedRows = Array.from(table.rows)
                                .slice(1)
                                    .sort((rowA, rowB) => rowA.cells[ind].innerHTML > rowB.cells[ind].innerHTML ? 1 : -1);
            table.tBodies[0].append(...sortedRows);
            return;
        }
    }
}

/*6*/
var ie = 0;
var op = 0;
var ff = 0;
var block; // Основной блок
var block_r; // Блок для изменения размеров
var delta_w = 0; // Изменение по ширине
var delta_h = 0; // Изменение по высоте
/* После загрузки страницы */
onload = function () {
  /* Определяем браузер */
  var browser = navigator.userAgent;
  if (browser.indexOf("Opera") != -1) op = 1;
  else {
    if (browser.indexOf("MSIE") != -1) ie = 1;
    else {
      if (browser.indexOf("Firefox") != -1) ff = 1;
    }
  }
  block = document.getElementById("block"); // Получаем основной блок
  block_r = document.getElementById("block_resize"); // Получаем блок для изменения размеров
  document.onmouseup = clearXY; // Ставим обработку на отпускание кнопки мыши
  block_r.onmousedown = saveWH; // Ставим обработку на нажатие кнопки мыши
}
/* Функция для получения текущих координат курсора мыши */
function getXY(obj_event) {
  if (obj_event) {
    x = obj_event.pageX;
    y = obj_event.pageY;
  }
  else {
    x = window.event.clientX;
    y = window.event.clientY;
    if (ie) {
      y -= 2;
      x -= 2;
    }
  }
  return new Array(x, y);
}
function saveWH(obj_event) {
  var point = getXY(obj_event);
  w_block = block.clientWidth; // Текущая ширина блока
  h_block = block.clientHeight; // Текущая высота блока
  delta_w = w_block - point[0]; // Измеряем текущую разницу между шириной и x-координатой мыши
  delta_h = h_block - point[1]; // Измеряем текущую разницу между высотой и y-координатой мыши
  /* Ставим обработку движения мыши для разных браузеров */
  document.onmousemove = resizeBlock;
  if (op || ff) document.addEventListener("onmousemove", resizeBlock, false);
  return false; // Отключаем стандартную обработку нажатия мыши
}
/* Функция для измерения ширины окна */
function clientWidth() {
  return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
}
/* Функция для измерения высоты окна */
function clientHeight() {
  return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
}
/* При отпускании кнопки мыши отключаем обработку движения курсора мыши */
function clearXY() {
  document.onmousemove = null;
}
function resizeBlock(obj_event) {
  var point = getXY(obj_event);
  new_w = delta_w + point[0]; // Изменяем новое приращение по ширине
  new_h = delta_h + point[1]; // Изменяем новое приращение по высоте
  block.style.width = new_w + "px"; // Устанавливаем новую ширину блока
  block.style.height = new_h + "px"; // Устанавливаем новую высоту блока
  /* Если блок выходит за пределы экрана, то устанавливаем максимальные значения для ширины и высоты */
  if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
  if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
}

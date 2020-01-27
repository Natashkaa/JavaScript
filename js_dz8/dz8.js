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
        key = event;
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
}





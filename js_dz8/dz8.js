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
var i;

for (i = 0; i < buttonLiArr.length; i++) {
    buttonLiArr[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
  });
}

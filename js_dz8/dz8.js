/*1*/
document.body.style.background = 'red'; // сделать фон красным
let elements = document.querySelectorAll('ul > li > a');
// elements.forEach( e => e.addEventListener('mouseenter', function(event){
//     e.style.color = "white";
// }));
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

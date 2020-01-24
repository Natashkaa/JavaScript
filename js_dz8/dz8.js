/*1*/
document.body.style.background = 'red'; // сделать фон красным
let elements = document.querySelectorAll('ul > li > a');
// elements.forEach( e => e.addEventListener('mouseenter', function(event){
//     e.style.color = "white";
// }));
elements.forEach( function(e) { 
    // var regV = /https:\/\//g; 
    // var result = e.match(regV);
    // if(result){
    //     e.style.textDecorationStyle = "dotted";
    // }
    // else{
    //     e.style.textDecorationStyle = "none";
    // }
    return e.style.textDecorationStyle = "dotted";
});

/*1*/
document.addEventListener('input', function(event) {
    let idName = event.target.id;
    if(!idName) return;

    let regExp = /[0-9]/g;
    let mssg = event.target.value;
    mssg = mssg.replace(regExp, function(x) { return ""});
    event.target.value = mssg;
});
/*2*/
var modal = document.getElementById("myModal");
//Get button that opens the modal
var btn = document.getElementById("btn");
//Get element that closes the modal
var closeWin = document.getElementsByClassName("closeMW")[0];
//open mw
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
closeWin.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
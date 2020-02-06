/*1*/
let block = document.getElementById('block');
let flag = false;

block.addEventListener('mousedown', function(event){
    flag = true;
});
block.addEventListener('mouseup', function(event){
    flag = false;
});
window.addEventListener('mousemove', function(event){
    if(flag){
        let clientX = event.clientX;
        if(clientX > 15 && clientX < block.offsetLeft){
            block.style.left = `${clientX}px`;
        }
        else if(clientX < 280 && clientX > block.offsetLeft){
            let newPos = block.offsetLeft + (clientX - block.offsetLeft);
            block.style.left = `${newPos}px`;
        }
    }
});
/*2*/
let left = document.getElementById('left');
let right = document.getElementById('right');
let image = document.getElementById('image');
let index = 4;
let imagesArray = ["../js_dz9/pictures/cat1.png",
                   "../js_dz9/pictures/cat2.jpg",
                   "../js_dz9/pictures/cat3.jpg",
                   "../js_dz9/pictures/cat4.jpg",
                   "../js_dz9/pictures/cat5.jpg"];

window.onload = function(){
    if(index == 0){
        left.style.color = "rgba(0, 0, 0, 0.411)";
    }
    else if(index == 4){
        right.style.color = "rgba(0, 0, 0, 0.411)";
    }
    else{
        right.style.color = "rgb(0, 0, 0)";
        left.style.color = "rgb(0, 0, 0)";
    }
    image.src = imagesArray[index];
    
};
left.addEventListener('click', function(){
    if(index != 0){
        index--;
        image.src = imagesArray[index];
        right.style.color = "rgb(0, 0, 0)";
        if(index == 0){
            left.style.color = "rgba(0, 0, 0, 0.411)";
        }
    }
});
right.addEventListener('click', function(){
    if(index != (imagesArray.length-1)){
        index++;
        image.src = imagesArray[index];
        left.style.color = "rgb(0, 0, 0)";
        if(index == imagesArray.length-1){
            right.style.color = "rgba(0, 0, 0, 0.411)";
        }
    }
});

/*3*/
let divs = document.getElementsByClassName('click-div');
let last = 0;
Array.from(divs).forEach(div => {
    div.addEventListener('click', function(){
        if(last && last != div){
            last.children[0].classList.toggle("shownhide");
        }
            div.children[0].classList.toggle("shownhide");
            last = div;
        });
});

/*4*/
class News {
    constructor(name, desc) {
      this.name = name;
      this.desc = desc;
    }
    get Name() {
        return this.name;
    }
    get Desc() {
        return this.desc;
    }
  };
let newsArray = [ new News("dlskdjsn 1", 'skjnd ovn,jhviujnedroikvjoirm'), 
                  new News("fjnsk di ksf skdjf2", 'skjnd ovn,jhviujnedr кап увапукп ваoikvjoirm'),
                  new News("fdkj 3", 'skjnd ovn,jhviujnedroikvjoirm вап вап явпак'),
                  new News("flkmfldmfn 4", 'skjnd ovn,jhviujnedroikvjoirm'),
                  new News("DFGdfg dfgdf 5", 'skjnd ovn,jhviujnedroikvjoirm')]
let ind = 0;
let newsBlock = document.getElementById('news_block');
let giffka = document.getElementById('gif');
window.onscroll=function(){
    var d = document.body;
    if (d.scrollHeight - d.scrollTop === d.clientHeight && newsArray.length && ind == 0) {
        var h3 = document.createElement("h3");
        h3.append(`${newsArray[ind].Name}`);

        var p = document.createElement("p");
        p.append(`${newsArray[ind].Desc}`);

        giffka.classList.toggle("showgif");
        ind = -1;
        newsArray.splice(0, 1);
        setTimeout(() => { 
            giffka.classList.toggle("showgif");
            newsBlock.append(h3);
            newsBlock.append(p);
            ind = 0;
        }, 1500);
    }
}


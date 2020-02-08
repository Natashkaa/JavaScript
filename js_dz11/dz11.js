/*gavnocode*/
/*color*/
let color = document.getElementById('inp_color');
let regExpColorName = /\W+/g;
let warnColor = document.getElementById('warn_color');
/*type*/
let type = document.getElementById('inp_type');
/*code*/
let code = document.getElementById('inp_code');
let warnCode = document.getElementById('warn_code');
/*allcolors*/
let all_colors = document.getElementsByClassName('desc');
let all = document.getElementById('ac_container');
/*work*/
add_button.onclick = function(){
    color = document.getElementById('inp_color');
    if(!color.value.match(regExpColorName)){
        warnColor.style.display = 'none';
        if(type.selectedIndex == 0){
            let regExpCode = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/
            if(code.value.match(regExpCode)){
                warnCode.style.display = 'none';
                if(!checkColor(all_colors, color.value)){
                    warnColor.style.display = 'none';
                    work(color, "rgb", code);
                }
                else{
                    warnColor.innerHTML = "this color already exists";
                    warnColor.style.display = 'inline';
                }
            } 
            else{//error code
                warnCode.style.display = 'inline';
                warnCode.innerText = "RGB code must match the pattern [0-255],[0-255],[0-255]";
            }
        }
        else if(type.selectedIndex == 1){
            let regExpCode = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-1]|0\.[0-9])$/
            if(code.value.match(regExpCode)){
                warnCode.style.display = 'none';
                if(!checkColor(all_colors, color.value)){
                    warnColor.style.display = 'none';
                    work(color, "rgba", code);
                }
                else{
                    warnColor.innerHTML = "this color already exists";
                    warnColor.style.display = 'inline';
                }
            } 
            else{//error code
                warnCode.style.display = 'inline';
                warnCode.innerText = "RGBA code must match the pattern [0-255],[0-255],[0-255],[0-1]"
            }
        }
        else if(type.selectedIndex == 2){
            let regExpCode = /^#([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])$/
            if(code.value.match(regExpCode)){
                warnCode.style.display = 'none';
                if(!checkColor(all_colors, color.value)){
                    warnColor.style.display = 'none';
                    work(color, "hex", code);
                }
                else{
                    warnColor.innerHTML = "this color already exists";
                    warnColor.style.display = 'inline';
                }
            } 
            else{//error code
                warnCode.innerText = "HEX code must match the pattern #000000-#FFFFFF";
                warnCode.style.display = 'inline';
            }
        }
    }
    else{//error color name
        warnColor.style.display = 'inline';
    } 
}
function checkColor(arr,name){
    let res = false;
    for(let i=0; i < arr.length;i++){
        if(arr[i].textContent == name){
            res = true;
        }
    }
    return res;
}  
function work(colorName, type, colorcode){
    let pColor = document.createElement("p");
    pColor.className = "desc";
    pColor.append(colorName.value);

    let span = document.createElement("span");
    span.append(type);

    let pCode = document.createElement("p");
    pCode.append(colorcode.value);

    let colordesc = document.createElement("div");
    colordesc.className = "color-desc";
    colordesc.append(pColor);
    colordesc.append(span);
    colordesc.append(pCode);

    let seccolor = document.createElement('div');
    seccolor.className = "sec-color";
    seccolor.append(colordesc);

    let newColor = document.createElement('div');
    newColor.className = "main-color";
    if(type == "rgb"){
        newColor.style.background = `rgb(${colorcode.value})`;
    }
    else if(type == "rgba"){
        newColor.style.background = `rgba(${colorcode.value})`;
    }
    else{
        newColor.style.background = `${colorcode.value}`;
    }
    newColor.style.background = `${colorcode.value}`;
    newColor.append(seccolor);
    all.append(newColor);
}

/*2*/
function draw() {
    /*circle*/
    let circle = document.getElementById('circle');
    let context = circle.getContext('2d');
    let centerX = circle.width / 2;
    let centerY = circle.height / 2;
    let radius = 20;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'rgb(202, 202, 202)';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'rgb(202, 202, 202)';
    context.stroke();
    /*rhombus*/
    let romb = document.getElementById('rhombus');
    if (romb.getContext){
      let ctx = romb.getContext('2d');
      let X = romb.width/2;
      let Y = romb.height/2;
      ctx.beginPath();
      ctx.moveTo(X,0);
      ctx.lineTo(0, Y);
      ctx.lineTo(X, Y*2);
      ctx.lineTo(X*2, Y);
      ctx.fillStyle = "rgb(202, 202, 202)";
      ctx.fill();
    }
    /*triangle*/
    let trian = document.getElementById('trian');
    if (trian.getContext){
      let ctx = trian.getContext('2d');
      let X = 0;
      let Y = 0;
      
      ctx.beginPath();
      ctx.moveTo(X,Y);
      ctx.lineTo(0, trian.height);
      ctx.lineTo(trian.width, trian.width);
      ctx.fillStyle = "rgb(202, 202, 202)";
      ctx.fill();
    }
}
document.onload = draw();

let checkboxes = document.getElementsByClassName('check');
let figure;
Array.from(checkboxes).forEach(e => {
    e.addEventListener('click', function(){
        if(e.checked){
            figure = e.name;
        }
        else{
            figure = null
        }
    });
});
/*get color*/
let cur_color = "rgb(202, 202, 202)";
let colorsArr = document.getElementsByClassName('item-color');
Array.from(colorsArr).forEach(e => {
    e.addEventListener('click', function(){
        cur_color = e.dataset.color;
    });
});

let paint = document.getElementById('paint');
paint.addEventListener('click', function(event){
    let relX = event.pageX - paint.offsetLeft;
    var relY = event.pageY - paint.offsetTop;
    if(figure == "romb"){
        drawRhombus(relX, relY, paint);
    }
    else if(figure == "rect"){
        drawRect(relX, relY, paint);
    }
    else if(figure == "trian"){
        drawTrian(relX, relY, paint);
    }
    else if(figure == "circle"){
        drawCircle(relX, relY, paint);
    }
});

function drawRhombus(relX, relY, paint){
    let X = relX;
    let Y = relY;
    if (paint.getContext){
        let ctx = paint.getContext('2d');
      
        ctx.beginPath();
        ctx.moveTo(X, Y - 50/2);
        ctx.lineTo(X - 50/2, Y);
        ctx.lineTo(X, Y + 50/2);
        ctx.lineTo(X + 50/2, Y);
        ctx.fillStyle = cur_color;
        ctx.fill();
    }
};
function drawRect(relX, relY, paint){
    let X = relX;
    let Y = relY;
    if (paint.getContext){
        let ctx = paint.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(X - 50/2, Y - 50/2);
        ctx.lineTo(X - 50/2, Y + 50/2);
        ctx.lineTo(X + 50/2, Y + 50/2);
        ctx.lineTo(X + 50/2, Y-50/2);
        ctx.fillStyle = cur_color;
        ctx.fill();
    }
};
function drawTrian(relX, relY, paint){
    let X = relX;
    let Y = relY;
    if (paint.getContext){
        let ctx = paint.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(X - 50/2, Y-50/2);
        ctx.lineTo(X-50/2, Y+50/2);
        ctx.lineTo(X+50/2, Y+50/2);
        ctx.fillStyle = cur_color;
        ctx.fill();
    }
};
function drawCircle(relX, relY, paint){
    let X = relX;
    let Y = relY;
    let context = paint.getContext('2d');
    let centerX = X;
    let centerY = Y;
    let radius = 20;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = cur_color;
    context.fill();
};
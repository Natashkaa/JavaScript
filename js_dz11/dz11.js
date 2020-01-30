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
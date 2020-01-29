/*color*/
let color = document.getElementById('inp_color');
let regExpColorName = /\W+/g;
let warnColor = document.getElementById('warn_color');
/*type*/
let type = document.getElementById('inp_type');
/*code*/
let code = document.getElementById('inp_code');
let regExpCode = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/
let warnCode = document.getElementById('warn_code');
/*allcolors*/
let all_colors = document.getElementsByClassName('desc');
let all = document.getElementById('ac_container');
/*wotk*/
add_button.onclick = function(){
    if(!color.value.match(regExpColorName)){
        warnColor.style.display = 'none'; 
    }
    else{//error color name
        warnColor.style.display = 'inline';
    }
    if(type.selectedIndex == 0){
            if(code.value.match(regExpCode)){
                warnCode.style.display = 'none';
                if(!checkColor(all_colors, color.value)){
                    warnColor.style.display = 'none';
                    let newColor = document.createElement('div');
                    newColor.className = "main-color";
                    newColor.style.background = "#f3f3f3";
                    all.append(newColor);
                }
                else{
                    warnColor.innerHTML = "this color already exists";
                    warnColor.style.display = 'inline';
                }
            }
            else{//error code
                warnCode.style.display = 'inline';
            }
         }
       
}

function checkColor(arr,name){
    let res = false;
    for(let i=0; i< arr.length;i++){
        if(arr[i].textContent == name){
            res = true;
        }
    }
    return res;
}
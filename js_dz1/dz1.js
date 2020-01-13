/* function first(a,b){
    if(a < b){
        return -1;
    }
    else if(a > b){
        return 1;
    }
    else{
        return 0;
    }
}

alert(first(5,5)); */

/*function factorial(a){
    let res = 1;
    for(let i = 1; i <= a; i++){
        res = res * i;
    }
    return res;
}
alert(factorial(6)); */

/*function third(a,b,c){
    let res = a + `${b}` + c;

    return res;
}

alert(third(1,4,9));*/

/*function fourth(...a){
    if(arguments.length == 1){
        return a * a;
    }
    if(arguments.length == 2){
        return arguments[0] * arguments[1];
    }
}

alert(fourth(5, 4));*/

/*function seventh(...args){
    if(arguments.length == 3){
        return `${arguments[0]}:${arguments[1]}:${arguments[2]}`
    }
    else if(arguments.length == 2){
        return `${arguments[0]}:${arguments[1]}:00`
    }
    else if(arguments.length == 1){
        return `${arguments[0]}:00:00`
    }
    else{
        return `00:00:00`
    }
}
alert(seventh());*/

/*function eighth(h,m,s){
    let res = (((h * 60)+ m) * 60) + s;
    return res;
}
alert(eighth(2,0,10));*/

/*function nineth(seconds){
    let h = seconds/3600 ^ 0 ;
    let m = (seconds-h*3600)/60 ^ 0 ;
    let s = seconds-h*3600-m*60 ;

    return `${h}:${m}:${s}`;
}
alert(nineth(3600));*/

/*function tenth(d1, m1, y1, d2, m2, y2){
    var a = new Date(y1, m1, d1)
    var b = new Date(y2, m2, d2)

    return ((b.getTime() - a.getTime()) / (1000*60*60*24))

}
alert(tenth(10, 03, 2018, 10, 03, 2019));*/

/*function fifth(n){
    let result = 0;
    let word = 0;
        for (var j = 1; j < n; j++) {
            if (n % j == 0) {
                result = result + j;
            };
        }
        if (result == n) {
             return "yes"
        }
        else{
            return "no";
        }
}
alert(fifth(6));*/



/*function sixth(from, to){
    let a = 0 + `,`;
    let result = 0;
    for (var i = from; i < to; i++) {
        result = 0;
        for (var j = 1; j < i; j++) {
            if (i % j == 0) {
                result = result + j;
            };
        }
        if (result == i) {
            a = a + `${result},`
        };
    }
    return a;
        
}
alert(sixth(2,100));*/
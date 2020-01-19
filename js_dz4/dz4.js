/*1*/
document.write(`<h2>--1--</h2>`);
function stringStat(str){
    let res = "";
    let regExpLet = /[a-zA-Z]/g;
    let letters = str.match(regExpLet);
    res += `LetterCount: ${letters.length}; `;
    let regExpNum = /[0-9]/g;
    let numbers = str.match(regExpNum);
    res += `NumberCount: ${numbers.length}; `;
    let regExpSign = /[^0-9a-zA-Z]/g;
    let signs = str.match(regExpSign);
    res += `signCount: ${signs.length}; `;
    return res;
}
document.write(`<p>${stringStat("HelloWorlsd12345!*-=")}</p>`);
/*2*/
document.write(`<h2>--2--</h2>`);
let dozens = [ "ноль", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
let from11to19 = [ "ноль", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
let numbers = [ "ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"]
function NumbersInWords(num){
    let res =  num.toString();
    if(num % 10 == 0){
        return dozens[res[0]];
    }
    else{
        if(res[0] == 1){
            return from11to19[res[1]];
        }
        else{
            return dozens[res[0]] + " " + numbers[res[1]];
        }
    }
}
document.write(`<p>${NumbersInWords(98)}</p>`);
/*3*/
document.write(`<h2>--3--</h2>`);
function switchCase(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(str[i].toLowerCase() != char){
            newStr += str[i].toLowerCase();
        }
        else{
            newStr += str[i].toUpperCase();
        }
    }
    return switchNumbers(newStr);
}
function switchNumbers(str){
    let regExp = /[0-9]/g;
    str = str.replace(regExp, function(x) 
    {
        return "_";
    });
    return str;
}
document.write(`<p>ABCdefgHIJKlmnOP1234</p>`);
document.write(`<p>${switchCase("ABCdefgHIJKlmnOP1234")}</p>`);
/*4*/
document.write(`<h2>--4--</h2>`);
function CamelCase(str){
    let regExp = /-[a-z]/g;
    str = str.replace(regExp, function(x)
    {
        return x[1].toUpperCase();
    });
    return str;
};
document.write(`<p>test1-t</p>`);
document.write(`<p>${CamelCase("camel-case; font-size; backgroung-color")}</p>`);
/*5*/
document.write(`<h2>--5--</h2>`);
function createAbbreviation(str){
    let regExp = /\s./g;
    let arr = [];
    let res = str[0].toUpperCase();
    arr = str.match(regExp);
    arr.forEach(element => {
        res += element.toUpperCase();
    });
    res = res.replace(/\s/g, '');
    return res;
};
document.write(`<p>cascading style sheets</p>`);
document.write(`<p>${createAbbreviation("cascading style sheets")}</p>`);
/*6*/
document.write(`<h2>--6--</h2>`);
function longString(...arg){
    if(arg.length > 0){
        let res = "";
        arg.forEach(x => res += x);
        return res;
    }
    else{
        return "empty";
    };
};
document.write(`<p>${longString("Hello", "WORLD", "! ", "SUP", "?")}</p>`);
/*7?*/
document.write(`<h2>--7--</h2>`);
function addbits(s) {
    var total = 0;
    s = s.replace(/\s/g, '').match(/[+\-]?([0-9\.\s]+)/g) || [];
    while(s.length) total += parseFloat(s.shift());
    return total;
};
document.write(`<p>${addbits('2+2*2+3')}</p>`);
document.write(`<p>${eval('(4+2*2+3+10-1)/2')}</p>`);
/*8*/
document.write(`<h2>--8--</h2>`);
function urlInfo(url){
    let regExp = /[^\:\/\/]/g;
    let info = url.split(':');
    let protocol = info[0];
    let fullDomain = "";
    let path = "";
    let res = "";
    info = info[1].replace(/\/\//g, '');
    let domainArr = info.match(/\w*\.\w*/g);
    for(let i = 0; i < domainArr.length; i++){
        fullDomain += `${domainArr[i]}`;
    }
    info = info.replace(/\w*\.\w*/g, '');
    path = info;
    res = `Protocol: ${protocol}<br>
           Domain: ${fullDomain}<br>
           Path: ${path}`;
    return res;
};
document.write(`<p>${urlInfo("https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp")}</p>`);
document.write(`<p>${urlInfo("https://itstep.org/ua/about")}</p>`);
/*9*/
document.write(`<h2>--9--</h2>`);
function splitString(str, sign){
    const regExp = new RegExp('\\w*[^\\' + sign + ']', 'g');
    let res = str.match(regExp);
    return res;
};
document.write(`<p>${splitString("Hello-World-love-cats", '-')}</p>`);
/*10*/
document.write(`<h2>--10--</h2>`);
function printF(...arg){
    if(arg.length == 0){
        return "nothing here";
    }
    else if(arg.length == 1){
        return "you forgot smth";
    }
    else{
        let text = arg[0];
        text = text.replace(/[\%][0-9]*/g, function(x) {
            x = x.replace('%', '');
            return x.replace(parseInt(x), arg[parseInt(x)]);
        });
        return text;
    }
};
document.write(`<p>"Today is %1 %2.%3.%4", "Monday", 10,8, 2020</p>`);
document.write(`<p>${printF("Today is %1 %2.%3.%4", "Monday", 10,8, 2020)}</p>`);
document.write(`<p>"Text -> %1 %2%4 %3! ASDSD", "Hello", "World", "SHMECK", "KEK"</p>`);
document.write(`<p>${printF("Text -> %1 %2%4 %3! ASDSD", "Hello", "World", "SHMECK", "KEK")}</p>`);
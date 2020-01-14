/*FIRST*/
document.write(`<h1>FIRST<\h1>`);
var Car = {
    manufacturer: "BMW",
    model: "BMW",
    year: 2020,
    speed: 60,
    about: function(){
        document.write(`<h3>${this.manufacturer}<br>${this.model}<br>${this.year}<br>${this.speed}<\h3>`)
    },
    getTime: function(distance){
        var time = distance / this.speed;
        time = time + (time / 4);
        document.write(`<h3>time: ${time}<\h3>`)
    }
}
let car = Object.create(Car);
car.about();
car.getTime(480);

/*SECOND*/
document.write(`<h1>SECOND<\h1>`);
var MyMath = {
    first: {
        numerator: 0,
        denomenator: 0
    },
    second: {
        numerator: 0,
        denomenator: 0
    },
    resNum: 0,
    resDenom: 0,
    showResult: function(){
        document.write(`<h3>Result: ${this.resNum}/${this.resDenom}<\h3>`)
    },
    addition: function(num1, den1, num2, den2){
        if(den1 == den2){
            this.resNum = num1 + num2;
            this.resDenom = den1;
            this.showResult();
        }
        else{
            for(let i = 2; i < 100; i++){
                if(i % den1  == 0 && i % den2 == 0){
                    this.resDenom = i;
                    break;
                }
            }
            this.resNum = (num1 * (this.resDenom / den1)) + (num2 * (this.resDenom / den2));
            this.showResult();
        }
    },
    substraction: function(num1, den1, num2, den2){
        if(den1 == den2){
            this.resNum = num1 - num2;
            this.resDenom = den1;
            this.showResult();
        }
        else{
            for(let i = 2; i < 100; i++){
                if(i % den1  == 0 && i % den2 == 0){
                    this.resDenom = i;
                    break;
                }
            }
            this.resNum = (num1 * (this.resDenom / den1)) - (num2 * (this.resDenom / den2));
            this.showResult();
        }
    },
    multiplication: function(num1, den1, num2, den2){
        this.resNum = num1 * num2;
        this.resDenom = den1 * den2;
        this.showResult();
    },
    division: function(num1, den1, num2, den2){
        this.resNum = num1 * den2;
        this.resDenom = num2 * den1;
        this.showResult();
    },
    reduction: function(num, denom){
        let less;
        do{
            if(num < denom)  {                                  
                less = num; 
            }                              
            else {
                less = denom;
            }                                    
            for(j = less; j > 0; j--){                      
                if(!(num % j) && !(denom % j)){     
                    num /= j;                          
                    denom /= j;                          
                    break;                               
                }
            }
        }while(j != 1); 
        this.resNum = num;
        this.resDenom = denom;
        this.showResult();
    }
}
let testMyMath = Object.create(MyMath);
testMyMath.addition(2,3,1,3);
testMyMath.addition(2,3,1,2);
testMyMath.substraction(3,4,1,4);
testMyMath.substraction(2,3,1,4);
testMyMath.multiplication(1,2,2,3);
testMyMath.division(1,2,1,4);
testMyMath.reduction(5,45);

/*THIRD*/
document.write(`<h1>THIRD<\h1>`);
var MyTime = {
    hours: 2,
    minutes: 45,
    seconds: 10,
    getTime: function(){
        document.write(`<h3>${this.hours}:${this.minutes}:${this.seconds}<\h3>`)
    },
    addSeconds: function(sec){
        this.seconds = this.seconds + sec;
        if(this.seconds > 59){
            this.addMinutes(Math.trunc(this.seconds / 60));
            this.seconds = this.seconds - (Math.trunc(this.seconds / 60) * 60);
        }
    },
    addMinutes: function(min){
        this.minutes = this.minutes + min;
        if(this.minutes > 59){
            this.addHour(Math.trunc(this.minutes / 60));
            this.minutes = this.minutes - (Math.trunc(this.minutes / 60) * 60);
        }
    },
    addHour: function(hour){
        this.hours = this.hours + hour;
    }
}
let times = Object.create(MyTime);
times.getTime();
times.addSeconds(140);
times.getTime();
times.addMinutes(30);
times.getTime();
times.addHour(5);
times.getTime();
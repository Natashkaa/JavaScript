/*1*/
document.write(`<h3>--1--</h3>`);
class Circle{
    constructor(){
        this.radius;
        this.pi = 3.1415;
    }
    get Radius() {
        return this.radius;
    }
    set Radius(x) {
        this.radius = x;
    }
    get Diameter() {
        return this.radius * 2;
    }
    Square() {
        return this.pi * Math.pow(this.radius, 2);
    }
    Perimeter() {
        return this.pi * this.Diameter;
    }
}
let circle1 = new Circle();
circle1.Radius = 2;
document.write(`<p>Radius: ${circle1.Radius}<br>
                   Diameter: ${circle1.Diameter}<br>
                   Square: ${circle1.Square()}<br>
                   Perimeter: ${circle1.Perimeter()}</p>`);
/*2*/
document.write(`<h3>--2--</h3>`);
class HtmlElement{
    constructor(tag, isSelfClosing, text){
        this.tag = tag;
        this.isSelfClosing = isSelfClosing;
        this.text = text;
    }
    getHtml(){
        if(this.isSelfClosing){
            return `<${this.tag}>${this.text}</${this.tag}>`;
        }
        else{return 0;}
    }
}
let htmlEl = new HtmlElement("h1", true, "Hello world!");
document.write(htmlEl.getHtml());
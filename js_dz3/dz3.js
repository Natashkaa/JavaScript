/*1.1*/
document.write(`<h2>--1--</h2>`);
document.write(`<h3>1.1</h3>`);
var shopList = [
    { name: "apple", amount: 6, isBought: false },
    { name: "pen", amount: 1, isBought: true },
    { name: "meat", amount: 3, isBought: true },
    { name: "bread", amount: 1, isBought: false },
    { name: "crisps", amount: 2, isBought: false },
]
shopList.sort((x,y) => x.isBought - y.isBought);
shopList.forEach(x => document.write(`<p>${x.name}, ${x.amount}, ${x.isBought}</p>`));

/*1.2*/
document.write(`<h3>1.2</h3>`);
var newGood = {
    name: "pen", 
    amount: 2, 
    isBought: false 
}
if(shopList.find(x => x.name == newGood.name)){
    var index = shopList.indexOf(shopList.find(x => x.name == newGood.name));
    shopList[index].amount += newGood.amount;
}
else{
    shopList.push(newGood);
}
shopList.forEach(x => document.write(`<p>${x.name}, ${x.amount}, ${x.isBought}</p>`));
/*1.3*/
document.write(`<h3>1.3</h3>`);
function BuyGood(name){
    var changedGood = shopList.find(x => x.name == name);
    var index = shopList.indexOf(changedGood);
    changedGood.isBought = true;
    shopList.slice(index, 1, changedGood);
}
BuyGood("bread");
shopList.forEach(x => document.write(`<p>${x.name}, ${x.amount}, ${x.isBought}</p>`));

/*2.1*/
document.write(`<h2>--2--</h2>`);
document.write(`<h3>2.1</h3>`);
var check = [
    { name: "phone", count: 2, price: 2000 },
    { name: "headphones", count: 1, price: 1200 },
    { name: "lamp", count: 3, price: 500 },
    { name: "notebook", count: 1, price: 5000 },
    { name: "keyboard", count: 1, price: 5000 }
]
check.forEach(x => document.write(`<p>${x.name}, ${x.count}, ${x.price}$ : ${x.count * x.price}</p>`));

/*2.2*/
document.write(`<h3>2.2</h3>`);
var fullPrice = 0;
check.forEach(x => (fullPrice += x.count * x.price));
document.write(`<p>FullPrice: ${fullPrice}$</p>`);

/*2.3*/
document.write(`<h3>2.3</h3>`);
let maximum = Math.max.apply(Math, check.map(function(x) { return x.price; }));
let maxXObjects = check.filter(function(x) { return x.price === maximum; });
maxXObjects.forEach(x => document.write(`<p>${x.name}, ${x.count}, ${x.price}$ : ${x.price}</p>`));

/*2.4*/
document.write(`<h3>2.4</h3>`);
var goodsCount = 0;
check.forEach(x => (goodsCount += x.count));
let avg = fullPrice / goodsCount;
document.write(`<p>AVRG: ${avg}</p>`);
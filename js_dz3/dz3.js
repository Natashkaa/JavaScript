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
function BuyGood(name){
    var changedGood = shopList.find(x => x.name == name);
    var index = shopList.indexOf(changedGood);
    changedGood.isBought = true;
    shopList.slice(index, 1, changedGood);
}
BuyGood("bread");
shopList.forEach(x => document.write(`<p>${x.name}, ${x.amount}, ${x.isBought}</p>`));
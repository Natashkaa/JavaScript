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

/*3*/
document.write(`<h2>--3--</h2>`);
let styleArray = [
    { name: "color", value: "red"},
    { name: "font-size", value: "13px"},
    { name: "font-style", value: "italic"},
    { name: "font-weight", value: "bold"},
    { name: "font-family", value: "Arial"}
]
let startLine = `<p style = "`;
let endLine = `">HELLO WORLD</p>`;
styleArray.forEach(x => startLine += `${x.name}: ${x.value}; `);
startLine += endLine;
document.write(startLine);

/*4.1*/
document.write(`<h2>--4--</h2>`);
document.write(`<h3>4.1</h3>`);
let lectureRooms = [
    { name: "B-A2", seats: 15, faculty: "TheBesst"},
    { name: "FR-T", seats: 10, faculty: "Bad"},
    { name: "YU-Y7", seats: 14, faculty: "What"},
    { name: "AXF", seats: 13, faculty: "What"},
    { name: "YHW", seats: 12, faculty: "What"},
    { name: "CVB", seats: 16, faculty: "Bad"},
    { name: "N-T6", seats: 20, faculty: "TheBesst"},
    { name: "MMM", seats: 19, faculty: "TheBesst"},
    { name: "O-OP9", seats: 18, faculty: "Bad"},
    { name: "QWERTY", seats: 15, faculty: "What"},
]
lectureRooms.forEach(x => document.write(`<p>${x.name}, ${x.seats}, ${x.faculty}</p>`));
/*4.2*/
document.write(`<h3>4.2</h3>`);
let byFaculty = lectureRooms.filter(function(x)
    {
        return x.faculty == "TheBesst";
    }
);
byFaculty.forEach(x => document.write(`<p>${x.name}, ${x.seats}, ${x.faculty}</p>`));
/*4.3*/
document.write(`<h3>4.3</h3>`);
let group1 = { name: "CoolGroup", studentCount: 16, faculty: "TheBesst"};
let resRooms = lectureRooms.filter(function(x)
    {
        return (x.faculty == group1.faculty && x.seats >= group1.studentCount);
    }
);
resRooms.forEach(x => document.write(`<p>${x.name}, ${x.seats}, ${x.faculty}</p>`));
/*4.4*/
document.write(`<h3>4.4</h3>`);
lectureRooms.sort((x,y) => y.seats - x.seats);
lectureRooms.forEach(x => document.write(`<p>${x.name}, ${x.seats}, ${x.faculty}</p>`));
/*4.5*/
document.write(`<h3>4.5</h3>`);
lectureRooms.sort((x, y) => {
    if ( x.name < y.name ) return -1;
    if ( x.name > y.name ) return 1;
});
lectureRooms.forEach(x => document.write(`<p>${x.name}, ${x.seats}, ${x.faculty}</p>`));
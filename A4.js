// //! Creating An Arrays
var food = [ "Pizza ", "Burger", "Snake"];
console.log(food);

var arr1= ["Hello ", "World ","Bye"];
var arr2 = [23,43,934,93];
var arr3 = [true,false,true ,true,false];

console.log(arr3);

var food = [ "Lion ","Elephant","Dog"];
var a = food[0];
var b = food[1];
var c = food[2];
alert(a);
alert(b);
alert(c);


var food = ["rice ","Coke ","Chicken"];
console.log(food);


//Upadate Element using Index
var cook= ["chicken ", "rice ", "Meal"];
console.log(cook[0]);
cook[0]="Roast";
console.log(cook[0]);

console.log(cook[1]);
cook[1]= "Biraynai";
console.log(cook[1]);

console.log(cook[2]);
cook[2]="Kabab ";
console.log(cook[2]);


// //! Length Property

var animals = [ "Lion ","Elephant","Dog"];
console.log(animals.length);

var arr= [];
console.log(arr.length);


//! Arrays Functions 
// Push

var food = [ ];
food.push("Pizza");
food.push("Burger");
food.push("Snacks");
alert(food[0]);
alert(food[1]);
alert(food[2]);

// // Push Function Multiple INput
var foods = [];
foods.push("Sandwhich", "rolls ","Cake","Biscuits");
document.write(foods);

//! Stack     //Last In First Out (LIFO)
var foods= [];
foods.push("Pizza");
foods.push("Burger")
foods.push("Snacks");

console.log("Length: " + foods.length);
console.log(foods.pop());

//! Queue // First In First Out(FIFO)    //shift(Remove and return first element from Array)
var food = [];
food.push("Pizza");
food.push("Burger");
food.push("Snacks");

console.log("Length: " + food.length);
console.log(food.shift());               //todo (shfit function remove first element from array)


//~ Unshift Function       (Add  element at the start of  Array)
var food = [];
food.push("Pizza");
food.push("Burger");
food.push("Snacks");

console.log(food[0]);
console.log(food[1]);
console.log(food[2]);
// console.log(food[0]);
// food.unshift("Paperoni Pizz");
// console.log(food[0]);

console.log(food[0]);
food.unshift("Paperoni Piza ");
console.log(food[0]);

















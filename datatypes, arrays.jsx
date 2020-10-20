//data types
let yourage= 18; //number
let yourname= 'Anonymus'; //string
let name= {first: 'name1', last: 'name2'}; //object
let truth= false; //boolean
let groceries= ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing= null; //value null

//strings (common methods)
let fruit= 'banana, apple, orange, blackberry';
let morefruits= 'banana\napple'; // \n= new line
console.log(morefruits);
console.log(fruit.length); //length of variable
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 5));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(6));
console.log(fruit.charAt(7));
console.log(fruit.charAt(8));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by comma
console.log(fruit.split('')); //split by characters

//array
//two ways to declare array
let fruits= ['banana', 'apple', 'orange', 'pineapple'];
fruits= new Array('banana', 'apple', 'orange', 'pineapple');
console.log(fruits[2]);  //access value at index 2
fruits[3]= 'blueberry';
console.log(fruits);

for(let i= 0; i< fruits.length; i++)
{
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits, fruits.pop(), fruits, fruits.pop(), fruits);  //pop removes last item
console.log(fruits.push('litchi'), fruits);  //appends
console.log(fruits[2]);
fruits[fruits.length]= 'new fruit';  //same as push
console.log(fruits);
let vegetables= ['tomato', 'potato', 'brinjal'];
let allgroceries= fruits.concat(vegetables); //combine or concatinate arrays 
console.log(allgroceries);
console.log(allgroceries.slice(1, 4));
console.log(allgroceries.reverse());

//sorting array
console.log(allgroceries.sort()); // sorting strings in array(in alphabetical order) is done in simple manner
let numbers= [4, 6, 7, 2, 8, 10, 3, 1, 11, 43, 56, 32, 12, 98, 45];
/*
to sort numbers we need to pass certain functions:
ascending order= array.sort(function(a, b) {return a-b}));
descending oreder= array.sort(function(a, b) {return b-a}));
*/
console.log(numbers.sort(function(a, b) {return a-b})); //ascending order
console.log(numbers.sort(function(a, b) {return b-a})); //descending order

let emptyarray= new Array();
for(let num=0; num<=10; num++)
{
    emptyarray.push(num);
}
console.log(emptyarray);
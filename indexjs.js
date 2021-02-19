// 1. ways to print in javascript
// console.log("Hello World");
// alert("me");
// document.write('this is my document write');

// 2. Javascript console API(application programming interface)
//  console.log("Hello World", 4+6, "Another log");
//  console.warn("this is a warning");
//  console.error("this is a error");
//  console.clear("clear");

// 3. Javascript Variables
// What is variables - Containers to store data values
// var num1 = 34;
// var num2 = 56;
// console.log(num1 + num2);

// 4. data types in javascript 
// Numbers
// var num1 = 344;
// var num2 = 56.35;

// String
// var str1 = "This is a string";
// var str2 = 'This is a string';

// Objects
// var marks = {
//     ravi: 35,
//     shubham: 78,
//     chotu: 77.89
// }
// console.log(marks)

// booleans
// var a = true;
// var b = false;
// console.log(a, b)
/*
At a very high level, there are two types of data types in javascript.
1. Primitive data types: undefined, null, number, boolean, string, symbol.
2. Reference data types: Arrays, Object.
*/

// Arrays

// var arr = [1,2,"babu",4,5]
// console.log(arr)

// Oprators in javascript
// Arthmatics operator
/*
var a = 50;
var b = 20;
console.log("the value of a + b is:",a+b);
console.log("the value of a - b is:",a-b);
console.log("the value of a * b is:",a*b);
console.log("the value of a / b is:",a/b);
*/
//Assignment operator
/*
var c = b;
c += 2; //c = c+2
c -= 2; //c = c-2
c *= 2; //c = c*2
c /= 2; //c = c/2
console.log(c);
*/
// Comparison Operators
/*
var x = 35;
var y = 55;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x < y);
console.log(x > y);
*/
/*
//Logical Operators
// Logical AND
// They will false until both values are ture
console.log(true && true);
console.log(true && false);
console.log(false && false);

// Logical AUR
console.log(true || true);
console.log(true || false);
console.log(false || false);

// Logical NOT
console.log(!true);
console.log(!false);
*/

// Function in javascript
// DRY = Do Not Repeat Yourself 
/*
function avg(a, b){
    c = (a * b)/2;
    return c;
}
c1 = avg(15, 15);
c2 = avg(10, 16);
// console.log(c1, c2);
*/

// Conditionals in javascript
/*
var age = 36; 
var age = 18;
if(age == 18){
    console.log("you are not a kid")
}
else if(age > 18){
    console.log("you are meture")
}
else{
    console.log("you are a kid")
}
console.log("this is if-else ladder")
*/

// Loops in javascript.
/*
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for (var i = 0; i < arr.length; i++){
    if(i==3){
        // break;
        continue;
    }
    console.log(arr[i]);
}

// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);
*/
/*
// Arrays Methods
let myArr = ["fam", "Camera", 34, null, true];
let numArr = [104, 97, 23, 51, 83, 14, 67, 55];
// console.log(myArr.length);
// myArr.pop();    // last word delete
// myArr.push('Priyanshu');
// myArr.shift(); // first word delete
// const newLen = myArr.unshift("Priyanshu");
// console.log(newLen);
// myArr.toString();
numArr.sort();
console.log(numArr);
*/

// String Methods in Javascript.

// let myString = "Rakhi is a good girl!"
// console.log(myString.length);
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf("good"));
// console.log(myString.slice(0, 7));

// console.log(myString.replace("Rakhi", "Reena"));

// DATE AND TIME IN JAVASCRIPT

/*
let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
*/

////////  DOM ==> Document Object Model.......

// DOM Manupulation......
/*
let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'darkred';
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-succes');
elemClass[0].classList.remove('bg-primary');

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

let tn = document.getElementsByTagName('div');
createdElement = document.createElement('p');
createdElement.innerText = 'This is created paragraph';
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('i');
createdElement2.innerText = 'This is italic paragraph';
tn[0].replaceChild(createdElement2, createdElement);

// SELECTING USING QUERY.....

sel = document.querySelector('.container');
console.log(sel)
sel1 = document.querySelectorAll('.container');
console.log(sel1)
*/

// Event in javascript.............

/*
function clicked(){
    console.log('The button has been clicked.');
}

window.onload = function(){
    console.log('The document has been loaded.');
}

// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<i> This is new text </i>";
//     console.log("Clicked....");
// })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouseover....");
// })
// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouseout....");
// })
var pvsHtml = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = pvsHtml;
    console.log("Mouseup when clicked....");
})
firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<i> This is new text </i>";
    console.log("Mouse clicked in continer....");
})
*/
/*
//Arrow function............

// function summ(a, b){
//     return a+b;
// }

// summ = (a, b)=>{
//     return a+b;
// }

logIn = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<i> This is setTimeOut </i>"
    console.log("It's a login page.");
}
// SetTimeOut And setInterval............
// clr = setTimeout(logIn, 2000); 
// clr = setInterval(logIn,2000);

// use clearTimeout(clr)/clearInterval(clr) to clear setTimeout/clearInterval...........
*/

////javascript local storage...
// localStorage.setItem('name', 'Priyanshu');
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//// JSON => javaScript object notation..........
obj = {name: "Priyanshu", length: 1, a: {this:'tha"t'}};
jsn = JSON.stringify(obj);
// console.log(typeOf jsn);
// console.log(jsn);
parsed = JSON.parse(`{"name":"Priyanshu","length":1,"a":{"this":"that"}}`)
console.log(parsed);

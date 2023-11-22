// this is comment
console.log("hello world");
console.log(1); 
// we have variable=is used to store some value in it ,we have Let , var, const =value never change are variables
let x=3;
console.log(x);
x=6;
console.log(x);
const pi=3.14;
console.log(pi);
// pi=0; it will show error cause pi is constant value
//console.log(pi);
// Arithmatic operator
let num1=6;
let num2=3;
console.log("the value of", num1 ,"+" , num2 ,"is",num1+num2);
console.log("the value of", num1 ,"-" , num2 ,"is",num1-num2);
console.log("the value of", num1 ,"*" , num2 ,"is",num1*num2);
console.log("the value of", num1 ,"%" , num2 ,"is",num1%num2);
console.log("the value of", num1 ,"**" , num2 ,"is",num1**num2);
// uninary operator
console.log(num1);
console.log(num1++);// post increment applying the increment by 1 value
console.log(num1); //now it will become 7
console.log(num1--); // still number is 7
console.log(num1);// number is 6
console.log(--num1);// num will become 5
console.log(++num1);// num will become 6

// = assignment operator assigning value to z
let z=8;
console.log(z);
//conditional operator 
console.log(3>5);//greater or lesser
console.log(7>=7);
//console.log(num1)

// "==" equals operator gives result "true" if numbers are equal ptherwise false
let num3=16;
let num4=16;
console.log(num3==num4);
// === checking the value and checking type like string
console.log(8 === "8");

//Bitwise operator
 //| or 
 //& add
// ^ Xor
 //~ complement
 // checking conditions in 2  scenarios
 let age=16;
 if(age >=18){
    console.log("yes,You can vote");
 }
 else{
    console.log("No,You can't vote");
 }
 //checking conditions in multiple scenarios
 /*let age2=16;
 if(age2 >=18 || age2<=60){
    console.log("yes,You can vote");
 }
 else{
    console.log("No,You can't vote");
  } */
  let age1=60;
 if(age1 >=60){
    console.log("your older");
 }
 else if(age1>=18){
    console.log("yes,You can't vote");
 }
 else{
    console.log("your teenager");
 }
 //Switch Case used to write for multiple actions to reduce the long code
 let day="friday" ;
 switch(day){
    case'sunday':
    console.log("Day is Sunday");
    break;
    case'monday':
    console.log("Day is Monday");
    break;
    case'tuesday':
    console.log("Day is tuesday");
    break;
    case'thursday':
    console.log("Day is thursday");
    break;
    default:
        console.log("day is invalid");
}
// data types
let num5= 12; //number
let float=3.14;//decimal or number
let course="Hii,I am Manasa";
let sri=false;
let vishal;
console.log(vishal);
console.log(typeof(num5)); //tells the type of data we are using
console.log(typeof(float));
console.log(typeof(course));
console.log(typeof(sri));
//NaN alpha-numeric value is given to variable it shows type: Not a number
 // Array =Collection of similar datatypes like marks
 let marks = [23,35,70];
 console.log(marks);
 marks.push(18);//push the value to  above list or add end of array
 console.log(marks);// print the marks as [23,35,70,18]
 marks.pop(23); // delete the value at end of array
 console.log(marks);
 marks.shift();//remove from start of the array
 console.log(marks);
 marks.unshift(100);//add value from starting
 console.log(marks);
 console.log(marks.indexOf(100)); //[100,35,70] is 0 index always strats from '0'
 console.log(marks.indexOf(70));
 console.log(marks.concat(55));//add the new number to array
 console.log(marks.length);
 console.log(marks.reverse());
 //console.log(marks.filter());

 //Object : real time entity ,functions of car :open door,close,properties
 let car = {
    length: 4,
    price:1000,
    color:"Maroon",
    "full name" :"Tata Motors"
    
 }
 console.log(car);
 // accessing properties of objects
 console.log(car.length)
 console.log(car.price);
 console.log(car.color);
 console.log(car["full name"]);

 // Loops :for loop used when we have more number of students
//for(initializaton,condition,increment/decrement)
let Tmarks=[2,3,4,5,6] ;
let total=0;
for (let index=0; index < Tmarks.length ; index++){
    console.log(Tmarks[index]);
    total=total+Tmarks[index];
}
console.log(total);
// for in : is used to get all object values/properties at once
for(const key in car){
    console.log(key,car[key]);
}
// for of:to iterate over iteratable items
for(const iterator of marks){
    console.log(iterator);
}
//while loop
let i=0;
while (i <= 10){
    console.log(i++);
    
}
// do while
let g=10;
do {
    console.log(g);
    g++;
}
while(i<=10);
// function = it is block of code executes its values
function hello(name) {
    console.log("Hello",name);
}
const friends=["a","b","c","d"];
hello();
friends.forEach((elements) => hello(elements));
let add=(x,y) => x+y 
console.log(add(2,3));
// Map,Filter,Reduce
let arr=[2,4,6,10];
let arr1 = arr.map((item) => item=item/2)
let arr2 = arr.filter((item) => item>5)
console.log(arr1);
console.log(arr2);
console.log(arr);
let product = arr.reduce((total,curr) => total + curr)
console.log(product);
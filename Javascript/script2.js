/* syntax: its a container or jar where we can store the data type
//other coding lan :strictly type coding language
string var1 = "rohan";
/ javscript coding lan :loosly type coding language
var var1 = "rohan";
/* syntax: its a container or jar where we can store the data type
var varname = datatype 
var age = 25 */
var age = 25;
console.log(age);//output:25
// need to update value from 25 to 26
age = 26;
console.log("Hey my age is : ",age);//output:26
// need to update value from 26 to "twenty six"
age = "twenty six";
console.log("Updated age is :",age);//output:twenty six
//In array we go for [10,22,55]
var students = ["manasa","rashmika","swathi","meena"];
console.log(students);
console.log(students[0]);
console.log(students.length);//array length
//nested Array:more than one array in single array
var arr1 = ["kaushal",24,{address:"hospet,Karnataka"},[1,2,3]];
console.log(arr1[2].address);
console.log(arr1[3]);
console.log("element is:", arr1[3][0]);//3rd array 1st element
var name1= "ROHAN";
/** Converts all the alphabetic characters in a string to lowercase. 
toLowerCase(): string; */
console.log(name1.toLowerCase());
/** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. 
toLocaleLowerCase(locales?: string | string[]): string; */
/** Converts all the alphabetic characters
 *  in a string to uppercase. 
toUpperCase(): string; */
var name2 ="kaali";
console.log(name2.toUpperCase());
//In object we go for flower braces {}  has key and value
var obj1 ={
    name:"nikitha",
    age:20,
    rollNo:34,
    isAdult:true
}
console.log(obj1);
//age of obj1
console.log(obj1.age);
console.log("roll no is :",obj1.rollNo ,"isAdult:",obj1.isAdult );//output:34,true
/* String Manipulations
slice,inclusive index number and exclusive index number  */
var name3 = "Karnati Sunitha";
console.log(name3.slice(3,5));//output :na
console.log(name3.replace("Sunitha","rohit"));//replace one name with other
console.log(name3.includes("Su"));
/*Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators */
//arithmatic operators
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
console.log("sum is :",z);
let x1 = 5 + 5;
let y1 = "5" + 5;
let z1= "Hello" + 5;
console.log(z1); /* output:Hello5 */
/* Logical Operator	Description
&&	logical and
||	logical or
!	logical not */
/*
&	AND	
|	OR	
~	NOT	
^	XOR	
<<	left shift	
>>	right shift	
>>>	unsigned right shift */
var obj2 = {
    name: "srinu",
    age:42 ,
    /* named function */
    hello : function () {
        console.log("fun");

    }
}
console.log(obj2.hello()); /* to find keys */
console.log(Object.keys(obj2));/*keys :age,name */
/* values */
console.log(Object.values(obj2)); /* values:srinu,42 */
 /* entries :both keys nd values */
 console.log(Object.entries(obj2));
 /* to update name */
 obj2.name = "kanakam";
 console.log(obj2.name);
 /* another object within object */
 var obj3 = {
    name: "seethakka",
    age:52 ,
    /* named function */
    hello : function () {
        console.log("fun");

    },
    anotherObject: {
        name:"nikhitha",
        age:22,
    }
}
console.log(obj3);
console.log(obj3.anotherObject.name);
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 != comp2 is",comp1 !== comp2);
console.log("comp1 === comp2", comp1 === comp2);
console.log("comp1 ==! comp2", comp1 !== comp2);
/* Array Methodologies (Map,Find,Filter,reduce)
promises in Javascript
async and await
try nd catch
diff methods in javascript */
/* Array Methodologies */
 /* 1.Map */
 var ourArray = [1,2,5,8,15];
 var newArray = ourArray.map((data) => data*5 )
 console.log(newArray); // output : 5,10,25,40,75
/* 2.Filter Method  */
var ourArray1 = [1,26,5,12,8,15,18,20];
 var newArray1 = ourArray1.filter((data) => {
    return data<15;
 })
 console.log(newArray1); // Output:1,5,12,8
 /* Find method : can find instance or single item  */
 var newArray2 = ourArray1.find((data) => data ==15)
 console.log(newArray2); //output : 15
 /* reduce method */
 var prices = [100,230,450,600];
 var newArray3 = prices.reduce((accumulator,currentvalue) =>{
    return accumulator+currentvalue;
 },0) //accumulator :initially might it has some garbage value to get clear value need to assign zero first
 console.log(newArray3);// output :0+100=100,100+230=330,330+450=780,780+600=1380
 var newArray2 = ourArray1.find((data) => data ==15)
 console.log(newArray2); //output : 15
 /* reduce method */
 var flipkartCart = [
   { 
    price :1000,
    quantity:2
 },
 {
    price:2000,
    quantity:1
 },
  {
    price:5000,
 quantity:3
  }
   ]
 var flipkartValue = flipkartCart.reduce((accumulator,currentvalue) =>{
    return accumulator+currentvalue.price*currentvalue.quantity; //it has 2 values price and quantity
 },0) //accumulator :initially might it has some garbage value to get clear value need to assign zero first
 console.log(flipkartValue);//ouput:19000
 /* Promises 
 Promises is an object that returns a value that we can hope to receive in the future but not immediately
 Pending stage ,fulfill stage,reject stage 
 var myPromise = new Promise (() => {}) or
var myPromise = new Promise ( function(){})*/
/* creating instance promise with new keyword and class is Promise having call back function(ananymous function) having stages */
var promise = new Promise ( function(resolve ,reject) {
    //creating promise
 resolve("success")
 reject("error occured");
})
// creating two methods then:handles success message and catch:handles the error message
 promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(err)
})//output :success(takes first value by default : resolve)
// setTimeout function with millisecond 
setTimeout(function() {
    console.log("hello all")
},7000) //output:hello all (it will wait for 7 sec to print the value)
//Alternate way of using then and catch is...async and await
// Async:functions execute asynchronously and Await:it will take some time to fetch details
var myProm = new Promise (function(resolve,reject){
    setTimeout(function() {
        resolve("this was successfully executed");
    },3000)
});
var getMyPromise = async () => {
    var getResult = await myProm;
    console.log(getResult);
}
getMyPromise(); //WILL EXECUTE AFTER 3 SEC :this was successfully executed
//try and catch blocks
var myProm1 = new Promise (function(res,rej){
    setTimeout(function() {
        res("plz execute the solution successfully");
    },3000);
    rej("err");
});
var getMyPromise1 = async () => {
    try{
    var getResult1 = await myProm1;
    console.log("success :",getResult1);
    }catch(err) {
        console.log("error:",err);
    }
}
getMyPromise1(); //output : "err"










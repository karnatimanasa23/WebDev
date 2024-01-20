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










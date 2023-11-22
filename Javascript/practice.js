 /*var surName="Karnati" ;
var lastName="MANASA";
console.log(surName);
console.log(surName + " there " +lastName);
console.log(lastName.length); 
//slice(x,y)
console.log(surName.slice(0,1)); // character position ="0" excluding characters from ="1=a" result="k"
console.log(surName.slice(2,3));  //res ="r"
console.log(surName.slice(6,7));//6th charcater = "i" excluding from 7th is null 
console.log(surName.slice(0,5));//excluding 5th charcaters result="karna" 5-1=4 charcaters
console.log(surName.slice()); */
/*var tweet=prompt("compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140); 
console.log(tweetUnder140.length); 
console.log(surName.toUpperCase());
console.log(lastName.toLowerCase()); */
/*
var name = prompt("what is your name?");
console.log(name);
//isolate first charcater
var firstChar = name.slice(0,1);
console.log(firstChar);
//change value to uppercase
var upperCaseValue = firstChar.toUpperCase(); //Result= R
console.log(upperCaseValue);
//isolate the rest of name
var toRestOfName=name.slice(1,name.length);
 //raMYA= ramya
console.log(toRestOfName); // result = amya
//concatenate both capitalization name
var toRestOfName =toRestOfName.toLowerCase();
console.log(toRestOfName);
var capitalizedValue = upperCaseValue + toRestOfName ;
console.log(capitalizedValue);
alert("Hello," +capitalizedValue);
*/
 /* let dogAge = 5;
let humanAge = (dogAge-2)*4+21; //precedence rules
var x= 5;
x += 1;  or x++  x=6 increment */
// function allows to reduce the repetition of code
/*
function getMilk(bottles) {
    var cost = bottles*10;
    console.log(cost);
}
getMilk(2);
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
    //Write your code here.
    /*
      var remainingAge  = 90-age;
      var days = remainingAge*365;
      var months = remainingAge*12;
      var weeks = remainingAge*52
      console.log("You have " + days +" days, "+ weeks +" weeks, and " + months +" months left. "); 
    /*************Don't change the code below**********/
    /* }lifeInWeeks(12); */
 /*var n =Math.random(); gives vlue in range of 0-0.9999999
n = Math.floor(n*5);
console.log(n);
n=Math.floor(n);
console.log(n); */
/*
prompt("Enter your name");
prompt("Enter their name");
var n=Math.random();
n = Math.floor(n*100);
if( n > 70){
alert("Love score is  " + n + "%" + " you both love each other like kanne and kanya");
}
else {
  alert ("your love score is : " + n + "%");
} */
/*
function bmiCalculator (weight, height) {
  var bmi = Math.round(weight/Math.pow(height,2)) ;
  var interpretation ;
  if( bmi >= 24.9 ) {
      interpretation = "Your BMI is " + bmi + ", so you are overweight." ;
      }
    if ( bmi >=18.5 && bmi <=24.9) {
         interpretation = "Your BMI is " + bmi + ", so you have a normal weight." ;
      }
      if ( bmi < 18.5 ) {
          interpretation = "Your BMI is " + bmi + ", so you are underweight." ;
      }
      return interpretation;
      
} bmiCalculator(56,6); */
/*
function isLeap(year){
  if((year%4 === 0) && (year%100 !== 0) || (year%400 === 0)){
    console.log("Leap year") ;
  } else {
    console.log("Not Leap year") ;
  }
}isLeap(2020);
*/
/* array = reduces the code */
/*
let array = [1,2,3,4];
console.log(array);
array.unshift(6);
console.log(array);
array.shift();
console.log(array);
array.push(81);
console.log(array);
array.pop();
console.log(array);
console.log(array.length);
console.log(array[1]);// result =2
*/
/*
let array1 = ["manasa","nikhitha","Ginger","sneha"];
let guestName = prompt("what's your name");
if(array1.includes(guestName)){
  alert("Welcome");
}else {
    alert("Sorry, Until Next time");
} */
/*
let z =3;
let result;
let multiplesOf3;
for (  let i=0 ;i<=10 ;i++) {
result =z*i;
console.log(result);
}
 */
/*
var output=[];
var count =1 ;
function fizzBuzz(){
  for ( count==1 ; count<=100 ;count++){ // or count = count + 1 ;
    //output.push(count);
    if ((count % 3 ===0) && (count % 5 === 0)){
      output.push("FizzBuzz");
      }
    else if(count % 3 ===0){
      output.push("Fizz");
    }
    else if(count %5 ===0){
      output.push("Buzz");
    }
    else {
    output.push(count);
    }
    console.log(output);
 }
}fizzBuzz();
*/
/*
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
} */
/*
function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      
      var output = [] ;
      
          if( n===1){
              
               output = [0] ;
              }
               else if ( n===2) {
                   output = [0,1] ;
                   
               }
               else {
                   output = [0,1]
                   for ( var i=2 ; i<n ;i ++){
                  output.push(output[output.length-2]+output[output.length-1]);
               }
            }
            return output;
}fibonacciGenerator(3);
*/
document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;
var tagName = document.getElementsByTagName("li");
console.log(tagName);//show the items in array form
var host1 = document.getElementsByTagName("li")[2].style.color = "purple" ; // change the color of item of 2nd position
console.log(host1);
var element = document.getElementsByTagName("li").length;
//console.log()
var par = document.querySelector("#para");
console.log(par);
document.querySelector(" a ");//will select anchor tag
document.querySelector(" li a");//will select particular anchor tag present in the list
document.querySelector("li.item");//will select particular item in the list
document.querySelector("#list a");
document.querySelector("#list .item");
document.querySelectorAll("#list .item");//will select all the items as nodelist
document.querySelector("li a").style.color = "red"; //changes the color to red 
document.querySelector("h1").style.fontSize = "5rem" ;
document.querySelector("body").style.padding = "10%" ;
document.querySelector("button").style.backgroundcolor= "yellow";
var inv = document.querySelector("button").classList.add("invisible");
console.log(inv);
var inv = document.querySelector("button").classList.remove("invisible");
var inv = document.querySelector("button").classList.toggle("invisible");
document.querySelector("h2").classList.add("huge"); //we can also add css style like this from javascript
document.querySelector("h2").innerHTML = "Hii I am Nikhitha" ;
document.querySelector("h1").textContent;  // output = Hello 
document.querySelector("h1").innerHTML;  // output = <strong>Hello </strong>'
document.querySelector("h2").innerHTML = "<em>GoodBye</em>";
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.bing.com"); //remains as google but go to bing.com website
// High level functioning
function add(num1,num2){
  return num1+num2 ;
}
function multiply(num1,num2){
  return num1*num2 ;
}
function calculator(num1,num2,operator){
  return operator(num1,num2,);
}
calculator(2,3,add);
 //creating objects and calling
var object1 = {
  name : "Ravi" ,
  Age: 23,
  Languages : [ "hindi ", "english "] ,
  Work: [ "cleaning ", "washing ", "cooking "]
}
console.log(object1);
console.log(object1.name);
console.log(object1.Age);
// constructor function
function Housekeeper(name,age,gender) {
  this.name = name;
  this.age = age;
  this.gender = gender ;
}
var housekeeper = new Housekeeper("tom",25,"Female") ;
console.log(housekeeper.name);
console.log(housekeeper.age);
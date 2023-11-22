// methods to access all html elements inside javascript
/*const para = document.getElementById('para');//after accessing the object we can do anything
const heading = document.getElementsByClassName('heading1');
const Allpara = document.getElementsByTagName('p');
const cardheading = document.querySelector('.card .heading1');
const cardsheading = document.querySelectorAll('.card .heading1'); */
//queryselector=return all the selector which matches our selector
//it gives the collection of objects/elements
/*console.log(heading[0]);//we can change content as per our requirement
console.log(Allpara);
console.log(cardsheading);
console.log(cardheading);
console.log(para); */
 /*for (let i=0 ; i<card.length ; i++){
    console.log(card[i].getElementsByClassName('heading1'));
} */
// properties : are values which we change
//para.innerHTML ="this is my first para in js"
//para.innerText ="this is my second para in js"
//task1:make show and hide card program
//const button = document.getElementById('showHideButton');
//const container = document.getElementsByClassName('container')[0];
/*
button.addEventListener('click', () => {
   // container.style.display ='none'  //card is not displayed
   // container.style.display ='block' 
  //console.log('button click on')
  if(container.style.display == 'block'){
    container.style.display = 'none';
    button.innerText ='Show card';
    button.style.backgroundColor = 'green';
  }
  else {
    container.style.display="block";
    button.innerText="Hide card";
    button.style.backgroundColor ='red';
  }
}) */
 // (or)
 /*function showHidecard(){
    container.style.display ='none'  //card is not displayed
  
   if(container.style.display == 'block'){
     container.style.display = 'none';
     button.innerText ='Show card';
     button.style.backgroundColor = 'green';
   }
   else {
     container.style.display="block";
     button.innerText="Hide card";
     button.style.backgroundColor ='red';
   }

 }
 button.addEventListener('click', () => showHidecard()); */
 // task-2: Create a counter program
 const spanNumber = document.getElementsByTagName('span')[0];
 const increamentButton = document.getElementById('increament');
 const setZero = document.getElementById('setZero');
 const decreamentButton = document.getElementById('decreament');
 let num = 0;

 increamentButton.addEventListener('click', () => {
    num++;
  spanNumber.innerText = num;

 }) 

 setZero.addEventListener('click', () => {
    num = 0;
  spanNumber.innerText = num;

 })

 decreamentButton.addEventListener('click', () => {
    num--;
  spanNumber.innerText = num;

 })
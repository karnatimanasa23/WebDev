 /*document.querySelector("button").addEventListener("click", function() { //type is string form,calling function to do particular task when we click

    alert("I Got clicked ");
}); */
/*
document.querySelectorAll("button").addEventListener("click",handleClick); //type is string form,calling function to do particular task when we click
function handleClick() {  
alert("I Got clicked s");
}; */
/*
var  numberOfButtons = document.querySelectorAll(".drum").length;
for ( i=0 ; i < numberOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); //type is string form,calling function to do particular task when we click
    function handleClick() {  
    alert("I Got clicked ");
    };
} 
var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
*/
var  numberOfButtons = document.querySelectorAll(".drum").length;

for ( i=0 ; i < numberOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {; 
        //type is string form,calling function to do particular task when we click
     /*create new object and call the method
      console.log(this); // this = able to get idendtity of that particular button
    
       // this.style.color = "white" ;
       */
      
   
        var buttonInnerHTML = this.innerHTML ;
          switch (buttonInnerHTML){
            case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

            case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

            case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

            case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

            case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

            case "k":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;

            case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

            default:
                console.log(buttonInnerHTML);

         }
    
    })
}


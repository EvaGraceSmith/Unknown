'use strict';
console.log('Hello from Kittyville');
 


function getCatName(){
    let catName = prompt('What is your cat\'s name?');
    console.log('user name data type:', typeof(catName));
    return document.write('Hello ' + catName +'\'s' + ' owner' + '!<br>');
  }

  function guessANumber(){
    let answer;
    while(answer !== '3'){
      answer = prompt('How many treats does your kitty want? Enter a number between 1-5');
      if(answer !== '3'){
        alert('Try again!');
      } else {
        alert('YES!!');
      }
    }
  }


function getUserTime(){
let message;
let time = prompt('What hour is it? In Military time?');
console.log("time is "+ time);
if(time <= 11){
 message = 'Top O\' da Mornin\' to ya! Time to feed your kitty!';
}
else if (time >= 12 && time <= 17){
 message = 'G\'Day Mate! Time to change the litter box.';
}
else if (time >= 18 && time < 24){
 message = 'Nighty Night! Time to give your kitty some snuggies!';
}
else {
 message = 'I dont know your time, but it\'s always a good time to give your cat some love.';
}
return document.write(message);

}

function displayRating() {
    let output = '';
    let rating = prompt('scale of 1-5, how many paws?');
    //for loop
    for(let i = 0; i < rating; i++){
      output += '<img  class=\"img_small\" src=\'/cat-paw.jpg\' alt=\"Image of a Cat\'s paw\"  />';
    }
    return document.write(output);
  
}

guessANumber();


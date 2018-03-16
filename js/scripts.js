'use strict';
console.log('so take off all your nodes');

let name = document.getElementById('myName');
let description = document.getElementById('titleDescription');

let nameCounter = 1;
let titleCounter = 1;
let angryCounter = 0;

name.addEventListener("click", () => {
  if (nameCounter < nameArray.length) {
    name.innerHTML = nameArray[nameCounter];
    nameCounter++
  } else {
    name.innerHTML = nameArray[0];
    nameCounter = 1;
  }
});

description.addEventListener("click", () => {
  if (angryCounter > 15 && angryCounter < 25) {
    description.innerHTML = "You're still clicking?"
    angryCounter++;
  } else if (angryCounter >= 25) {
    description.innerHTML = "Seriously. It's starting to hurt."
  } else if (titleCounter < titleArray.length) {
    description.innerHTML = titleArray[titleCounter];
    titleCounter++;
    angryCounter++;
  } else {
    description.innerHTML = titleArray[0];
    titleCounter = 1;
    angryCounter++;
  }
});

let nameArray = ['Ryan Thorup', 'Thorpus Maximus'];
let titleArray = ['Web Developer', 'Game of Thrones Enthusiast', 'Trivia Addict', 'Devourer of Chaos', 'SKC Fan']
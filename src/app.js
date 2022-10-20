var scanf = require("scanf");

console.log("Please input your character:");
let inputName = scanf("%s");
const characters = ["Rhaenerya", "Daemon", "Viserys", "Alicent"];

let character = inputName.toLowerCase();

switch (character) {
  case characters[0].toLowerCase():
    console.log("Found character");
    break;
  case characters[1].toLowerCase():
    console.log("Found character");
    break;
  case characters[2].toLowerCase():
    console.log("Found character");
    break;
  case characters[3].toLowerCase():
    console.log("Found character");
    break;
  default:
    console.log("Sorry, character not found");
    break;
}

let found = characters.find(search => search.toLowerCase() == character);
if (found) console.log('Found character');
 else console.log('Character not found');
// found ? console.log("Found character") : console.log("Character not found");

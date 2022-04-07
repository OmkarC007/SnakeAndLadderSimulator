console.log("Welcome to Snake Ladder Simmulator");
let startPosition = 0;
let noPlay = 0;
let ladder = 1;
let snake = 2;

let playerPosition = 0;

let DiceRoll = (Math.floor(Math.random() * 10 ) % 6 ) + 1;
let playerOption = Math.floor(Math.random() * 10 ) % 3 ; 

switch(playerOption){
    case ladder:
        playerPosition += DiceRoll;
        break;
    case snake:
        playerPosition -= DiceRoll;
        break;
    default:
        break;
}
console.log("Position is :"+playerPosition)
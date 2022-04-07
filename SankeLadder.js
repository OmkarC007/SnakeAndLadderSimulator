console.log("Welcome to Snake Ladder Simmulator");
let startPosition = 0;
let noPlay = 0;
let ladder = 1;
let snake = 2;
let Goal = 100;

let playerPosition = 0;
let DicePlayedTime = 0;

while(playerPosition < Goal){


    let DiceRoll = (Math.floor(Math.random() * 10 ) % 6 ) + 1;
    DicePlayedTime ++; 

    let playerOption = Math.floor(Math.random() * 10 ) % 3 ; 

    console.log("Dice Value "+DiceRoll);
    

    switch(playerOption){  
         
        case ladder:
            console.log("Player Chose Ladder");
            if((playerPosition + DiceRoll) <= Goal){
                playerPosition = playerPosition + DiceRoll;
            }
            break;
        case snake:
            console.log("Player Chose snake");
            if((playerPosition - DiceRoll) <= startPosition){
                playerPosition = startPosition;
            }
            else{
                playerPosition = playerPosition + DiceRoll;
            }
            break;
        default:
            console.log("Player Chose No play");
            break;
    }
    console.log("Position is :"+playerPosition)

}
console.log("Number Of Times Plays :"+DicePlayedTime);



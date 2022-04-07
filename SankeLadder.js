console.log("Welcome to Snake Ladder Simmulator");
let startPosition = 0;
let noPlay = 0;
let ladder = 1;
let snake = 2;
let Goal = 100;

let playerPosition = 0;

while(playerPosition < Goal){

    let DiceRoll = (Math.floor(Math.random() * 10 ) % 6 ) + 1;
    let playerOption = Math.floor(Math.random() * 10 ) % 3 ; 

    console.log("Dice Value "+DiceRoll);
    console.log("Player Option "+playerOption);

    switch(playerOption){   
        case ladder:
            playerPosition += DiceRoll;
            break;
        case snake:
            if((playerPosition - DiceRoll) <= startPosition){
                playerPosition = startPosition;
            }
            else{
                playerPosition = playerPosition + DiceRoll;
            }
            break;
        default:
            break;
    }
    console.log("Position is :"+playerPosition)

}



console.log("Welcome to Snake Ladder Simmulator");
let startPosition = 0;
let noPlay = 0;
let ladder = 1;
let snake = 2;
let Goal = 100;

let player1Playing = true;
let player1Position = 0;
let player2Position = 0;
let DicePlayedTime = 0;
let playerPosition = 0;

while(player1Position < Goal && player2Position < Goal){

    if(player1Playing){
        console.log("Player 1 playing ");
        console.log("Player 1 position "+player1Position);
        playerPosition = player1Position;
    }else{
        console.log("Player 2 playing ");
        console.log("Player 2 position "+player2Position);
        playerPosition = player2Position;
    }

    let DiceRoll = (Math.floor(Math.random() * 10 ) % 6 ) + 1;
    console.log("Dice value "+DiceRoll);
    DicePlayedTime ++; 

    let playerOption = Math.floor(Math.random() * 10 ) % 3 ; 

    

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
                playerPosition = playerPosition - DiceRoll;
            }
            break;
        default:
            console.log("Player Chose No play");
            break;
    }

    if(player1Playing){
        player1Position = playerPosition;
        console.log("Player 1 new Position "+player1Position);
    }else{
        player2Position = playerPosition;
        console.log("Player 2 new Position "+player2Position);
    }

    if(playerOption != ladder){
        player1Playing = !(player1Playing);
    }
    console.log("\n---------------");

}
console.log("The Number Of times Dice Rolled "+ DicePlayedTime);
if(player1Position == Goal){
    console.log("Player 1 won the game");
}else{
    console.log("Player 2 won the game");
}


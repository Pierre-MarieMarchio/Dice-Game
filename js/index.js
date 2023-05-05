
function roll(player1className, player2className) {
    var player1Roll = Math.floor((Math.random() *6)+1 );
    var player2Roll = Math.floor((Math.random() *6)+1 );

    changeImg (player1className, player1Roll);
    changeImg (player2className, player2Roll);
    playersMessage(player1Roll, player2Roll);

    console.log(player1Roll);
    console.log(player2Roll);
    
}

function changeImg (className, playerRoll) {
     switch (true) {
        case playerRoll === 1:
            document.querySelector(className).setAttribute("src", "images/dice1.png");
        break;
        case playerRoll === 2:
            document.querySelector(className).setAttribute("src", "images/dice2.png");
        break;
        case playerRoll === 3:
            document.querySelector(className).setAttribute("src", "images/dice3.png");
        break;
        case playerRoll === 4:
            document.querySelector(className).setAttribute("src", "images/dice4.png");
        break;
        case playerRoll === 5:
            document.querySelector(className).setAttribute("src", "images/dice5.png");
        break;
        case playerRoll === 6:
            document.querySelector(className).setAttribute("src", "images/dice6.png");
        break;
        default:
            console.log("error dicee not found");
        break;
    }
}

function playersMessage(player1Roll, player2Roll) {
    
    if (player1Roll > player2Roll) {
        document.querySelector("#title").innerText = "Player 1 Win";
        console.log("Player 1 Win");
    } else if (player1Roll < player2Roll) {
        document.querySelector("#title").innerText = "Player 2 Win";
        console.log("player 2 win")
    } else {
        document.querySelector("#title").innerText = "Un match nul Yougi !";
        console.log("match nul")
    }
    
} 
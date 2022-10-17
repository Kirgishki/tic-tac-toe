const Gameboard = (() => {
    var gameboard = ["","","",
                       "","","",
                       "","",""];
    
    const guiGameboard = document.getElementById("gameTable");
    const gameboardFields = Array.from(guiGameboard.children);

    const render = function() {
        gameboardFields.forEach(element => {
            let i = element.getAttribute("data-field-id");
            element.textContent = gameboard[i];
        });
    };
    
    function checkFields (first,second,third) { 
        return first === second && first === third && first !== "";
    }

    const resetTable = () => {
        gameboard = ["","","",
                     "","","",
                     "","",""];
        render();
    };

    const isThereWinner = () => {
        if(checkFields(gameboard[0], gameboard[1], gameboard[2]) ||
           checkFields(gameboard[3], gameboard[4], gameboard[5]) ||
           checkFields(gameboard[6], gameboard[7], gameboard[8]) ||
           checkFields(gameboard[0], gameboard[4], gameboard[8]) ||
           checkFields(gameboard[2], gameboard[4], gameboard[6]) ||
           checkFields(gameboard[0], gameboard[3], gameboard[6]) ||
           checkFields(gameboard[1], gameboard[4], gameboard[7]) ||
           checkFields(gameboard[2], gameboard[5], gameboard[8])){
            console.log("true");
            return true;
        }else{
            return false;
        }
    };

    return { gameboardFields, render, gameboard, isThereWinner, resetTable};
})();

const Player = (name, sign) => {
    var name = name || "Player";
    var playerSign = sign;

    return {name, playerSign};
};

const Game = (() => {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");

    var playerTurn = player1;

    Gameboard.gameboardFields.forEach(field => 
        field.addEventListener('click', function(){

        let i = field.getAttribute("data-field-id");

        if(Gameboard.gameboard[i] != ""){
            return;
        }

        Gameboard.gameboard[i] = playerTurn.playerSign;
        Gameboard.render();
        if(Gameboard.isThereWinner()){
            Gameboard.resetTable();
        }
        playerTurn == player1 ? playerTurn = player2 : playerTurn = player1;
    }));
})();




const Gameboard = (() => {
    const gameboard = ["","","",
                        "","","",
                        "","",""];
    
    const guiGameboard = document.getElementById("gameTable");
    const gameboardFields = Array.from(guiGameboard.children);

    const render = function() {
        gameboardFields.forEach(element => {
            let i = element.getAttribute("data-field-id");
            element.textContent = gameboard[i];
        });
    }
    


    return { gameboardFields, render, gameboard};

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

    Gameboard.gameboardFields.forEach(field => field.addEventListener('click', function(){
        let i = field.getAttribute("data-field-id");

        if(Gameboard.gameboard[i] != ""){
            return;
        }
        Gameboard.gameboard[i] = playerTurn.playerSign;
        Gameboard.render();

        playerTurn == player1 ? playerTurn = player2 : playerTurn = player1;
    }));
})();




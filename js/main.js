const Gameboard = (() => {
    const gameboard = ["X","O","X",
                        "X","O","X",
                        "X","O","X"];
    
    const guiGameboard = document.getElementById("gameTable");
    const gameboardFields = Array.from(guiGameboard.children);


    gameboardFields.forEach(element => {
        element.addEventListener('click', function () {
            let i = this.getAttribute("data-field-id");
            this.textContent = gameboard[i];
        });
    });

})();



const Player = () => {

};
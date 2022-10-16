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


})();



const Player = () => {

};
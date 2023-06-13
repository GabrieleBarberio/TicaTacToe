const $gameboard = document.getElementById('gameboard');
const $info = document.getElementById('info');



const startCells = [
    "","","",
    "","","",
    "","",""
]

let go = 'circle';
$info.textContent = 'Circle goes first'  



const genereteBoard = () => {
    startCells.forEach( ( _cell, index) => {
        const cellItem = document.createElement('div');
        cellItem.classList.add("square");
        cellItem.id = index; 
        cellItem.addEventListener('click', addGo)
        $gameboard.appendChild(cellItem);
    } )
}

const checkScore = () => {

    const allCells = document.querySelectorAll('.square')
    const winningCombos = [
        [0,1,2] , [3,4,5] , [6,7,8],
        [0,3,6] , [1,4,7] , [2,5,8],
        [0,4,8] , [2,4,6] ]

    winningCombos.forEach( combo => {

        const crossWin = combo.every( cell => allCells[cell].firstChild?.classList.contains('cross'))
        
        const circleWin = combo.every( cell => allCells[cell].firstChild?.classList.contains('circle'))

        if(crossWin) {
            $info.textContent = 'Cross Wins!'
            allCells.forEach( square => square.replaceWith(square.cloneNode(true)))
            alert('To restart the game restart the page, you can also use A and B buttons');
            return $info;
            
        }
        

        if(circleWin) {
            $info.textContent = 'Circle Wins!';
            allCells.forEach( square => square.replaceWith(square.cloneNode(true)));
            alert('To restart the game restart the page, you can also use A and B buttons')
            return $info;
        }
    })
    

}

const addGo = (event) => {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    event.target.append(goDisplay);
    go = go === 'circle' ? 'cross' : 'circle';
    $info.textContent = `It is now ${go}'s go.`
    event.target.removeEventListener('click', addGo)
    checkScore()
};
genereteBoard();



  

// Aggiungiamo un evento al pulsante di reset per inizializzare nuovamente il gioco
const $resetButton = document.querySelectorAll('.reset-button');
$resetButton.forEach(element => element.addEventListener('click', () => location.reload()));


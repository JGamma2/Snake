screenHeight = document.body.scrollHeight;
screenWidth = window.screen.availWidth;

const board = {
    boardWidth: 15,
    boardHeight: 15,
    boardArray: 
    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],],
    renderBoard() {


        let xPos = 1;
        let yPos = 1;
        for (let i = 0; i < this.boardHeight; i++) {

            //Creates a new row for the new divs.
            let currentRow = document.createElement('div');
            currentRow.className = 'gameRow';
            currentRow.id = `row-${yPos}-`;
            

            for (let j = 0; j < this.boardWidth; j++) {
                let newTile = document.createElement('div');
                newTile.className = "gameSquare";
                newTile.id = `square-${xPos}-${yPos}`;
                //newTile.style.width = `${screenHeight/this.boardWidth}`+"px";
                //newTile.style.height = `${screenHeight/board.boardHeight}`+"px";
                currentRow.appendChild(newTile);
                xPos++;
            }
            
            document.getElementById("board").appendChild(currentRow);
            xPos = 1;
            yPos++;
        }

        let allRows = document.getElementsByClassName("gameRow");
        for (i of allRows) {
            i.style.height = `${screenHeight/board.boardHeight}`+"px";
            i.style.width = `${screenHeight}`+"px";
        };

        let allSquares = document.getElementsByClassName("gameSquare");
        for (i of allSquares) {
            i.style.height = "100%";
            i.style.width = `${screenHeight/board.boardHeight}`+"px";
        };

    },

};

board.renderBoard();


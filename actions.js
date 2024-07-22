screenHeight = document.body.scrollHeight;
screenWidth = document.body.scrollWidth;

const board = {
    boardWidth: 0,
    boardHeight: 0,
    boardArray: 0,

    createBoard(arrayWidth, arrayHeight) {
        this.boardWidth = arrayWidth;
        this.boardHeight = arrayHeight;
        this.boardArray = new Array(arrayHeight);
        for (let j = 0; j < this.boardHeight; j++) {
            this.boardArray[j] = new Array(arrayWidth);
            if (j === 0 || j === this.boardHeight-1) {
                for (let i = 0; i < this.boardWidth; i++) {
                    this.boardArray[j][i] = 1;
                };
            } else {
                for (let i = 0; i < this.boardWidth; i++) {
                    this.boardArray[j][i] = i === 0 || i === this.boardWidth-1 ? 1 : 0;
                };
            };
            
        };
    },

    renderCurrentBoard() {


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
                currentRow.appendChild(newTile);
                xPos++;
            }
            
            document.getElementById("board").appendChild(currentRow);
            xPos = 1;
            yPos++;
        }

        let allRows = document.getElementsByClassName("gameRow");

        if (screenWidth/screenHeight > this.boardWidth/this.boardHeight) {
            for (i of allRows) {
                i.style.height = `${100/this.boardHeight}vh`;
                i.style.width = `100vh`;
            };
        } else {
            for (i of allRows) {
                i.style.height = `100vh`;
                i.style.width = `${screenWidth}`+"px";
            };
        };


        let allSquares = document.getElementsByClassName("gameSquare");

            for (i of allSquares) {
                i.style.height = "100%";
                i.style.width = `${100/this.boardWidth}%`;
            };

    },

};

const game = {
    gameRunning: true,
    startGame(speed=250, color="#533321") {
        while (gameRunning) {
            setTimeout(this.nextTurn(), speed);
        };
    },
    nextTurn() {
        this.moveOneSquare(currentDirection);
    },
    moveOneSquare(CD) {
        switch (CD) {
            case "left":
                this.handleObstacle([[currentPosition[0]][currentPosition[1]-1]]);
                break;
            case "right":
                this.handleObstacle([[currentPosition[0]][currentPosition[1]+1]]);
                break;
            case "up":
                this.handleObstacle([[currentPosition[0]-1][currentPosition[1]]]);
                break;
            case "down":
                this.handleObstacle([[currentPosition[0]-1][currentPosition[1]]]);
                break;
        };
    },
    handleObstacle(nextSnakeHeadPosition) {
        switch (board.boardArray[nextSnakeHeadPosition[0]][nextSnakeHeadPosition[1]]) {
            case 0:
                this.advanceToNextSquare(nextSnakeHeadPosition);
                break;
            case 1:
                this.hitWall(nextSnakeHeadPosition);
                break;
            case 2:
                this.consumeSatisfyinglyCrunchyObject(nextSnakeHeadPosition);
                break;
        };
        
    },
};

board.createBoard(14,14);
board.renderCurrentBoard();


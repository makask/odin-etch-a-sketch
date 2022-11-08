
function fillDrawingBoard(size){
    const drawingBoard = document.querySelector(".drawingBoard");
    let boardSize = size;
    drawingBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    drawingBoard.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    for(let i = 0; i < (boardSize * boardSize); i++){
        let square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.background = "blue";
        drawingBoard.appendChild(square);
    }   
}

fillDrawingBoard(30);
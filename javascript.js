
function fillDrawingBoard(boardSize){
    const drawingBoard = document.querySelector(".drawingBoard");
    let squares = drawingBoard.querySelectorAll("div");
    squares.forEach((div) => {
        div.remove();
    });
    drawingBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    drawingBoard.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    for(let i = 0; i < (boardSize * boardSize); i++){
        let square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.background = "blue";
        drawingBoard.appendChild(square);
    }   
}

fillDrawingBoard(16);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
  fillDrawingBoard(this.value);
}
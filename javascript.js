const drawingBoard = document.querySelector(".drawingBoard");

function fillDrawingBoard(boardSize){
    let squares = drawingBoard.querySelectorAll("div");
    squares.forEach((div) => {
        div.remove();
    });
    drawingBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    drawingBoard.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    for(let i = 0; i < (boardSize * boardSize); i++){
        let square = document.createElement("div");
        drawingBoard.appendChild(square);
    }   
}

fillDrawingBoard(16);

/* Slider to change number of squares on drawing board*/

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
  fillDrawingBoard(this.value);
}


/* Show Grid*/
function gridOnOff(){    
    let gridButton = document.querySelector("#btn-show-grid");
    let currentValue = document.getElementById("btn-show-grid").value;
    let squares = drawingBoard.querySelectorAll("div");

    if(currentValue == "gridOff"){
        document.getElementById("btn-show-grid").value="gridOn";
        squares.forEach((div) => {
            div.style.border = "1px solid grey";   
        });
        gridButton.innerHTML = "Disable grid";
    }else{
        document.getElementById("btn-show-grid").value="gridOff";
        squares.forEach((div) => {
            div.style.border = "none";   
        });
        gridButton.innerHTML = "Show grid";
    }
}


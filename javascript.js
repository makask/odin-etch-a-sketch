const drawingBoard = document.querySelector(".drawingBoard");
let grid = false;

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
        if(grid){
            square.style.border = "1px solid grey";
        }
        // mousemove
        square.addEventListener("mousedown",()=>{
            if(isDrawing){
                square.style.background = "black";
            }
        });
        square.addEventListener("mouseover", ()=>{
            if(isDrawing){
                square.style.background = "black";
            }
        });
        square.addEventListener("click", ()=>{
            square.style.background = "black";
        });
    }   
}

let isDrawing = false;
window.addEventListener("mousedown", ()=>{
    isDrawing = true;
});

window.addEventListener("mouseup", ()=>{
    isDrawing = false;
});


fillDrawingBoard(16);

/* Slider to change number of squares on drawing board*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
  fillDrawingBoard(this.value);
}


/* Show/Disable Grid*/
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
        grid = true;
    }else{
        document.getElementById("btn-show-grid").value="gridOff";
        squares.forEach((div) => {
            div.style.border = "none";   
        });
        gridButton.innerHTML = "Show grid";
        grid = false;
    }
}


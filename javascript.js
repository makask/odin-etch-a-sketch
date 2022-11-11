const drawingBoard = document.querySelector(".drawingBoard");
let grid = false;
let action = "draw";
let drawColor = "black";
let backgroundColor = "white";

main();

function main(){
    fillDrawingBoard(16);
    console.log(action);
}

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
        if(action==="draw"){
            draw(square);
        }
    }   
}

function draw(square){
    square.addEventListener("mousedown",()=>{
        if(isDrawing){
            square.style.background = drawColor;
        }
    });
    square.addEventListener("mouseup",()=>{
        if(isDrawing){
            square.style.background = drawColor;
        }
    });
    square.addEventListener("mouseover", ()=>{
        if(isDrawing){
            square.style.background = drawColor;
        }
    });

    square.addEventListener("click", ()=>{
        square.style.background = drawColor;        
    });
}

/*Draw on grid*/
let isDrawing = false;
window.addEventListener("mousedown", ()=>{
    isDrawing = true;
});

window.addEventListener("mouseup", ()=>{
    isDrawing = false;
});

/**/



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

/* Clear entire grid*/
function clearGrid(){
    let squares = drawingBoard.querySelectorAll("div");
    squares.forEach((div) => {
        div.style.background = "white";
    });
    fillDrawingBoard(slider.value); 
}

/* Drawing Color */
let colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", (e) => {
    drawColor = e.target.value;
});

/* Background Color*/
let backColor = document.querySelector("#background");
backColor.addEventListener("change", (e) => {
    backgroundColor = e.target.value;
    let squares = drawingBoard.querySelectorAll("div");
    squares.forEach((div) => {
        div.style.background = backgroundColor;
    });
});

/*Eraser*/
let eraser = document.querySelector("#eraser");
eraser.addEventListener("click", ()=>{
   drawColor = backgroundColor; 
});



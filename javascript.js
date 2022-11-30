const drawingBoard = document.querySelector(".drawingBoard");
let grid = false;
let action = "draw";
let drawColor = "black";
let backgroundColor = "white";

main();

function main(){
    fillDrawingBoard(16);  
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
        square.addEventListener("click", draw);     
        square.addEventListener("mousedown",draw); 
        square.addEventListener("mouseover",draw);
        square.addEventListener("mouseup", draw); 
    }   
}

function toggleDraw(){
    action = "draw";
    console.log(action);
}

function toggleRainbow(){
    action = "rainbow";
    console.log(action);
}

/*Draw or not on grid*/
let isDrawing = false;
drawingBoard.addEventListener("mousedown", (e)=>{
    e.preventDefault();
    isDrawing = true;
});

drawingBoard.addEventListener("mouseup", ()=>{
    isDrawing = false;
});

function draw(){
    /* Normal Mode*/
    if(isDrawing && action === "draw"){
        this.style.backgroundColor = colorPicker.value;
        if(this.className === "background"){
            this.classList.remove("background");
        }
        this.classList.add("pixel");
    }
    /* Rainbow Mode*/
    if(isDrawing && action === "rainbow"){
        drawColor = "#" + randomColor();
        this.style.backgroundColor = drawColor;
        if(this.className === "background"){
            this.classList.remove("background");
        } 
        this.classList.add("pixel");
    }
    /* Eraser */
    if(isDrawing && action === "erase"){
        this.style.backgroundColor = "white";
        this.className = "";
    }
}

// css-tricks.com/snippets/javascript/random-hex-color/
function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

/* Slider to change number of squares on drawing board*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
  fillDrawingBoard(this.value);
  console.log(this.value);
}

/* Show/Disable Grid*/
function gridOnOff(){    
    let gridButton = document.querySelector("#btn-show-grid");
    let currentValue = gridButton.value;
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

/* Background Color */
let backColor = document.querySelector("#background");
backColor.addEventListener("change", (e) => {
    backgroundColor = e.target.value;
    let squares = drawingBoard.querySelectorAll("div");
    squares.forEach((div) => {
        if(div.className === "pixel"){
            //div.style.backgroundColor = drawColor;
        }else{
            div.style.background = backgroundColor;
            div.classList.add("background");
        }
    });
});

/*Eraser*/
let eraser = document.querySelector("#eraser");
eraser.addEventListener("click", ()=>{
   action = "erase"; 
});




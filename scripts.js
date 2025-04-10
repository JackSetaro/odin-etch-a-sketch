const canvasSize = 960;

function LoadGrid(gridSize, color){
    const container = document.querySelector("#container");
    container.style.width = canvasSize + "px";
    container.style.height = canvasSize + "px";

    container.innerHTML = '';
    
    for(let i = 0; i < gridSize * gridSize; i++){
        let elem = document.createElement("div");
        elem.setAttribute("class", "pixel");

        let elemSize = canvasSize/gridSize;
        elem.style.width = elemSize + "px";
        elem.style.height = elemSize + "px";

        if(color) elem.style.background = "rgb(" + getRandomInt(256) + ", "+ getRandomInt(256) + "," + getRandomInt(256) + ")";
        else elem.style.background = "#000";
        
        elem.style.opacity = 0;

        elem.addEventListener("mouseover", (event) => {
            colorPixel(event.currentTarget);
        });

        container.appendChild(elem);
    }
}

function colorPixel(elem){
    let curOpacity = Number(elem.style.opacity) + .1;
    elem.style.opacity = curOpacity;
}

function changeGrid(){
    let gridSize = prompt("What size would you like the grid (Max 100)")
    if (gridSize > 100) {
        while(gridSize > 100){
            gridSize = prompt("What size would you like the grid (Max 100)");
        }
    }

    let color = prompt("Black and White or Color? (y/n)").toLowerCase();
    if (color != "y" && color != "n") {
        while(color != "y" && color != "n"){
            gridSize = prompt("Black and White or Color? (y/n)").toLowerCase();
        }
    }

    LoadGrid(gridSize, color == "y" ? true : false);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

document.addEventListener('DOMContentLoaded',() => {
    LoadGrid(16);
});
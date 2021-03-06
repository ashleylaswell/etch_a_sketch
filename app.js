let container = document.getElementById('container');
let boxes = document.getElementsByClassName("grid-item");

let limit = true;
while (limit){
  let gridSize = prompt("How many blocks wide would you like your grid to be? (1-100)");
  if (gridSize >= 1 && gridSize <= 100){
    createGrid(gridSize);
    limit = false;
  }
}

function createGrid(size){
  container.style.setProperty('--size', size);
  for(let i = 0; i < size * size; i++){
    let box = document.createElement('div');
    box.className = "grid-item";
    container.appendChild(box);
  }
}

function drawOnGrid(){
  for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mouseover", function(e){
      this.style.backgroundColor = "black";
    });
  }
}

drawOnGrid();


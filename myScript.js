const body = document.body;

function removeElement(id) {
  let elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}

function createGrid(numSquares){

  let grid = document.createElement('div');
  grid.className = "grid";

  for(let i=0; i<numSquares; i++){
    let row = document.createElement('div');
    row.className = "row";

    for(let j=0; j<numSquares; j++){
      let square = document.createElement('div');
      square.className = "square";
      square.addEventListener('mouseover', () => {
        square.classList.add("square-hovered");
      });
      row.appendChild(square);
    }
    grid.appendChild(row);
  }

  body.appendChild(grid);

  return grid;
}

function main(){
  let numSquares = 4;
  let grid;

  // setup options panel
  let options = document.createElement('div');
  options.className = "options";

  // options panel - grid-size-button
  let gridSizeButton = document.createElement('button');
  gridSizeButton.textContent = "Select grid size";
  gridSizeButton.className = "grid-size-button";

  gridSizeButton.addEventListener('click', () => {
    numSquares = prompt("How many squares per side do you want for the grid? Enter a number.");
    while(numSquares < 1 || numSquares > 100){
      alert("Enter a number between 1-100 inclusive.");
      numSquares = prompt("How many squares per side do you want for the grid? Enter a number.");
    }
    // remove old grid
    if(document.getElementsByClassName("grid")){
      grid.remove();
    }
    grid = createGrid(numSquares);
  }); 

  options.appendChild(gridSizeButton);
  body.appendChild(options);
  // auto-generate the grid the 1st time.
  grid = createGrid(numSquares);

  return;
}

main();
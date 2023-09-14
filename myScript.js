const body = document.body;

// given numSquares (same number for length & width), returns a grid of that size
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

  return grid;
}


function main(){
  let numSquares = 4;
  let grid;

  // setup options panel
  let options = document.createElement('div');
  options.className = "options";

  // options panel - grid-resizing-button
  let gridSizeButton = document.createElement('button');
  gridSizeButton.textContent = "Select grid size";
  gridSizeButton.className = "grid-size-button";

  // grid container
  let gridContainer = document.createElement('div');
  gridContainer.className = "grid-container";

  // logic for grid-resizing-button
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
    gridContainer.appendChild(grid);
    body.appendChild(grid);
  }); 

  options.appendChild(gridSizeButton);
  body.appendChild(options);

  // auto-generate the grid the 1st time.
  grid = createGrid(numSquares);
  gridContainer.appendChild(grid);
  body.appendChild(grid);
  

  return;
}

main();
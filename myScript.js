const body = document.body;

// omits last 2 characters at the end of inputStr.
function removePx(inputStr){
  return inputStr.substr(0, inputStr.length-2);
}

// fix up borders so each grid line is same-thickness
function cleanupBorders(square, numSquares, i, j){
  // remove colliding right-borders
  if(j!==numSquares-1){
    square.style.borderRight = "0px";
  }
  // remove colliding bottom borders
  if(i!==numSquares-1){
    square.style.borderBottom = "0px";
  }
  return square;
}

function createFooter(){
  let footer = document.createElement('div');
  let footerText = document.createElement('p');
  footer.className = "footer";
  footerText.textContent = "FabianTorresTech 2023";
  footer.appendChild(footerText);
  return footer;
}

// given numSquares (same number for length & width), returns a grid of that size
function createGrid(numSquares, gridSizingContainer){
  let maxWidth = removePx(gridSizingContainer.style.width);
  let maxHeight = removePx(gridSizingContainer.style.height);

  let grid = document.createElement('div');
  grid.className = "grid";

  for(let i=0; i<numSquares; i++){
    let row = document.createElement('div');
    row.className = "row";

    for(let j=0; j<numSquares; j++){
      let square = document.createElement('div');
      square.className = "square";
      // determine size of each pixel w/ border
      square.style.width = `${maxWidth/numSquares}px`;
      square.style.height = `${maxHeight/numSquares}px`;
      square = cleanupBorders(square, numSquares, i, j);

      // change color of squares
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

  let title = document.createElement('h1');
  title.className = "title";
  title.textContent = "Etch-A-Sketch!";
  body.appendChild(title);

  let titleText = document.createElement('p');
  titleText.className = "title-text";
  titleText.textContent = "Welcome to my etch-a-sketch app.\r\n";
  titleText.textContent += "To draw, simply hover your mouse over any square to change its color.\r\n";
  titleText.textContent += "To change the grid size to add more pixels, you can click the 'Select grid size' button and enter your number of squares. \r\n (ex: 4 = 4x4 = 16 pixel grid)\r\n\r\n";
  titleText.textContent += "Enjoy! (:";
  body.appendChild(titleText);

  // setup options panel
  let options = document.createElement('div');
  options.className = "options";
  let gridSizeButton = document.createElement('button');
  gridSizeButton.textContent = "Select grid size";
  gridSizeButton.className = "grid-size-button";

  // grid container (sizing boundaries for rows/squares)
  let gridSizingContainer = document.createElement('div');
  gridSizingContainer.className = "grid-sizing-container";
  gridSizingContainer.style.height = "500px";
  gridSizingContainer.style.width = "500px";

  // outerGridContainer (responsible for placement on page - flexbox)
  let outerGridContainer = document.createElement('div');
  outerGridContainer.className = "outer-grid-container";

  // logic for gridSizeButton
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
    // create new grid and append it to gridSizingContainer.
    grid = createGrid(numSquares, gridSizingContainer);
    gridSizingContainer.appendChild(grid);
  }); 


  options.appendChild(gridSizeButton);
  body.appendChild(options);

  // auto-generate the grid the 1st time and append it
  //
  // - append created grid in this order...
  //    + grid (rows and columns) ->
  //    + gridSizingContainer (sizing boundaries) ->
  //    + outerGridContainer (flexbox centering)
  grid = createGrid(numSquares, gridSizingContainer);
  gridSizingContainer.appendChild(grid);
  outerGridContainer.appendChild(gridSizingContainer);
  body.append(outerGridContainer);

  let footer = createFooter();
  body.appendChild(footer);
  
  return;
}

main();
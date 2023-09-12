function createGrid(){
  const body = document.body;

  for(let i=0; i<4; i++){
    let row = document.createElement('div');
    row.className = "row";

    for(let j=0; j<4; j++){
      let square = document.createElement('div');
      square.className = "square";
      square.addEventListener('mouseover', () => {
        square.classList.add("square-hovered");
      });
      row.appendChild(square);
    }
    body.appendChild(row);
  }

  

  return;
}

createGrid();
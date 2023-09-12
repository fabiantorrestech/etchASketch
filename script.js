
function main(){

  let row = document.createElement('div');
  row.className = "row";
  row.setAttribute('style', 'display: flex; justify-content: center;');

  let square = document.createElement('div');
  square.className = "square";
  square.setAttribute('style', 'color: blue; width: 200px; height: 200px;');

  for(let i=0; i<4; i++){
    row.appendChild(square);
  }

  for(let i=0; i<4; i++){
    document.body.appendChild(row);
  }
  
  return;
}

main();
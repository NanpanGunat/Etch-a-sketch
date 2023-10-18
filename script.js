const squareContainer = document.querySelector(".container");

function createSquare(width, color) {
  const div = document.createElement("div");
  div.style.cssText = `width:${width}px;
                        background-color:${color};
                        aspect-ratio: 1 / 1;
                        border: solid red 1px;
                        
                        
                        
  `;
  return div;
}

for (let index = 0; index < 250; index++) {
  const square = createSquare(60, "yellow");
  squareContainer.appendChild(square);
}

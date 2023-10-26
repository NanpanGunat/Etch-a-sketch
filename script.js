const squareContainer = document.querySelector(".container");
const slider = document.querySelector(".slider");

function changeColor(element, color = "red") {
  element.target.style.backgroundColor = color;
}

function createSquare(width, color) {
  const div = document.createElement("div");
  div.classList = "pixel";
  div.style.cssText = `width:${width}px;
                        background-color:${color};
                        aspect-ratio: 1 / 1;
                        border: solid red 1px;                    
                        
  `;
  div.addEventListener("mouseover", changeColor);
  return div;
}

function generateCanvas(size) {
  for (let index = 0; index < 750; index++) {
    const square = createSquare(size, "yellow");
    squareContainer.appendChild(square);
  }
}

function clearCanvas() {
  const pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((e) => e.remove());
}

generateCanvas(slider.value);

slider.addEventListener("input", function (e) {
  clearCanvas();
  generateCanvas(Number(e.target.value));
  console.log(Number(e.target.value));
});

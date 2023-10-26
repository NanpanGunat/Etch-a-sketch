const restartBtn = document.querySelector(".restart");
const slider = document.querySelector(".slider");
const colorPicker = document.querySelector(".color_picker");
const squareContainer = document.querySelector(".container");
const showGridBtn = document.querySelector(".show_grid_btn");

// Grid
function toggleGrid() {
  const pixelList = document.querySelectorAll(".pixel");
  showGridBtn.classList.contains("show")
    ? pixelList.forEach((e) => e.classList.add("grid"))
    : pixelList.forEach((e) => e.classList.remove("grid"));

  updateBtnText();
}

function toggleClass(e) {
  e.target.classList.toggle("show");
}

// Grid Btn
showGridBtn.addEventListener("click", toggleClass);
showGridBtn.addEventListener("click", toggleGrid);

function updateBtnText() {
  showGridBtn.classList.contains("show")
    ? (showGridBtn.textContent = "Hide Gird")
    : (showGridBtn.textContent = "Show Gird");
}

// restart btn
console.log(restartBtn);
restartBtn.addEventListener("click", (e) => {
  clearCanvas();
  generateCanvas(slider.value);
  toggleGrid();
});

// Color
function changeColor(element, color = colorPicker.value) {
  element.target.style.backgroundColor = color;
}

// Create pixels
function createPixel(width, color = "white") {
  const div = document.createElement("div");
  div.classList = "pixel";
  div.style.cssText = `width:${width}px;
                        background-color:${color};
                        aspect-ratio: 1 / 1;
                        flex-grow:1                     
  `;
  div.addEventListener("mouseover", changeColor);
  return div;
}

// Pixel Sizing
slider.addEventListener("input", function (e) {
  clearCanvas();
  generateCanvas(Number(e.target.value));
  toggleGrid();
});

// Canvas
function generateCanvas(size) {
  for (let index = 0; index < 1000; index++) {
    const square = createPixel(size);
    squareContainer.appendChild(square);
  }
}

function clearCanvas() {
  const pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((e) => e.remove());
}

generateCanvas(slider.value);

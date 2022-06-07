// external.js
function addRandomColorEvent(element) {
    element.addEventListener("mouseover", () => {
        let red = Math.floor(Math.random()*256).toString();
        let green = Math.floor(Math.random()*256).toString();
        let blue = Math.floor(Math.random()*256).toString();
        element.style.backgroundColor = "rgb(" + red + ", " + green + ", "
                + blue + " )";
    });
    // element.addEventListener("mouseout", () => {
    //     nothing so far 
    // });
}

function buildGrid(size) {
    const cell_size = 960/size;
    // const height_str = "height: " + cell_size.toString() + "px;";
    // const width_str = "width: " + cell_size.toString() + "px;";
    const grid = document.getElementById("main");
    // rows, css has parent "main" at flex display column-wise
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.cssText = "display: flex; align-items: stretch;";
        // row.style["display"] = "flex";
        // row.stlye["align-items"] = "stretch";
        row.style.cssText += " height: " + cell_size.toString() + "px;";
        for (let j = 0; j < size; j++) {  // columns
            const col = document.createElement("div");
            col.classList.add("cell");
            col.style.cssText = "width: " + cell_size.toString() + "px;";
            addRandomColorEvent(col);
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function clearGrid() {
    let rows = document.querySelectorAll("#main > div");
    for (let i = 0; i < rows.length; i++) {
        rows[i].remove();
    }
}

let size_button = document.querySelector("#size-button");
size_button.addEventListener("click", () => {
    let size = prompt("Enter a size for the grid between 1 and 100", null);
    if (size === null) {
        return -1;
    }
    size = parseInt(size);
    while (size < 1 || size > 100) {
        size = prompt("PLEASE enter a size for the grid between 1 and 100", null);
        size = parseInt(size);
    }
    if (size === null) {
        return -1;
    }
    clearGrid();
    buildGrid(size);
});



buildGrid(16);

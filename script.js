// Element that represents the container of the grid
const gridContainer = document.querySelector("#grid-container");

const grid = size => {
    for (i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell);
    }
};

grid(16);

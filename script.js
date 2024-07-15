// Element that represents the container of the grid
const gridContainer = document.querySelector("#grid-container");

const grid = size => {
    const gridItemWidth = 100 / size;
    for (i = 0; i < size * size; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item"); 
        gridItem.style.width = `${gridItemWidth}%`;
        gridItem.style.paddingBottom = `${gridItemWidth}%`
        gridContainer.appendChild(gridItem);
    }

    // Add event listener to each grid item 
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseenter", () => {
            gridItem.classList.add("painted");
        });
    });
};



grid(16);


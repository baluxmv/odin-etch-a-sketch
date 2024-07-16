// Element that represents the container of the grid
const gridContainer = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-button");

const grid = size => {
    // Clear any previous existing grid items
    while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
    }
    
    // Calculate the size of each grid item
    const gridContainerSize = gridContainer.offsetWidth;
    const gridItemSize = (gridContainerSize / size);
    const gridItemPercent = gridItemSize / gridContainerSize * 100;

    for (i = 0; i < size * size; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item"); 
        gridItem.style.flexBasis = gridItemPercent + "%";
        
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

resizeButton.addEventListener("click", () => {
    let integerInput;

    do {
        let userInput = prompt("How many number of squares per side?");
        integerInput = parseInt(userInput);

        if (Number.isInteger(integerInput) && 
            1 <= integerInput && integerInput <= 100) {
            break;
        }
        else {
            alert("Invalid input, please enter an integer between 1 <= 100");
        }
    } 
    while (true);
    
    grid(integerInput);
});



grid(16);


const pixelContainer = document.querySelector(".pixel-container");
let numOfPixelsPerSide = 16;
setUpGrid(numOfPixelsPerSide);

function setUpGrid(num) {
    for (let i = 0; i < num; i++) {
        const pixelRow = document.createElement("div");
        pixelRow.classList.add("pixel-row");
        pixelContainer.appendChild(pixelRow);
        for (let j = 0; j < num; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixelRow.appendChild(pixel);
        }
    }

    const pixelList = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixelList.length; i++) {
        pixelList[i].addEventListener("mouseenter", () => {
            pixelList[i].classList.add("hover");
        });
    }
}

const buttonContainer = document.querySelector(".button-container");

const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";
buttonContainer.appendChild(newGridButton);
newGridButton.addEventListener("click", function () {
    const userSelection = +(prompt("Enter a number between 3 and 100:", ""));
    if (userSelection > 2 && userSelection < 101 && Math.floor(userSelection) === userSelection) {
        numOfPixelsPerSide = userSelection;
        document.querySelectorAll(".pixel-row").forEach(e => e.remove());
        document.querySelectorAll(".pixel").forEach(e => e.remove());
        setUpGrid(numOfPixelsPerSide);
    } else {
        alert("This is not a valid input. Please select a number between 3 and 100.");
    }
})

const clearButton = document.createElement("button");
clearButton.textContent = "Clear Grid";
buttonContainer.appendChild(clearButton);
clearButton.addEventListener("click", function() {
    document.querySelectorAll(".hover").forEach( (node) => node.classList.remove("hover"));
});
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
            pixelList[i].setAttribute("style", "background-color: #4B9DA9;");
        });
    }
}

const newGridButton = document.querySelector(".new-grid-button");
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

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function() {
    document.querySelectorAll(".hover").forEach( (node) => node.classList.remove("hover"));
});

function getRandomColor() {
    const HEXDIGITS = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += HEXDIGITS[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(getRandomColor())
let isRandom = false;
const randomizeButton = document.querySelector(".randomize-button");
randomizeButton.addEventListener("click", function() {
    isRandom = !isRandom;
    const pixelList = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixelList.length; i++) {
        pixelList[i].addEventListener("mouseenter", () => {
            pixelList[i].setAttribute("style", `background-color: ${getRandomColor()};`);
        });
    }
})
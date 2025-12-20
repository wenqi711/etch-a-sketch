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
    draw();
}

function draw() {
    const pixelList = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixelList.length; i++) {
        pixelList[i].addEventListener("mouseenter", () => {
            pixelList[i].classList.add("hover");
            if (isRandom) {
                pixelList[i].setAttribute("style", `background-color: ${getRandomColor()};`);
            }

            else{
                pixelList[i].setAttribute("style", "background-color: #4B9DA9;");
            }
        });
    }
}

const newGridButton = document.querySelector(".new-grid-button");
newGridButton.addEventListener("click", function () {
    let userSelection = +(prompt("Enter a number between 3 and 100:", ""));
    console.log(userSelection);
    while (isNaN(userSelection) || userSelection < 3 
    || userSelection > 100 || Math.floor(userSelection) !== userSelection) {
        if (userSelection === 0) { break; }
        alert("This is not a valid input. Please select a number between 3 and 100.");
        userSelection = +(prompt("Enter a number between 3 and 100:", ""));
        console.log(userSelection);
    }
    if (userSelection !== 0) {
        numOfPixelsPerSide = userSelection;
        document.querySelectorAll(".pixel-row").forEach(e => e.remove());
        document.querySelectorAll(".pixel").forEach(e => e.remove());
        setUpGrid(numOfPixelsPerSide);
    }
})

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function() {
    document.querySelectorAll(".hover").forEach( (pixel) => {
        pixel.classList.remove("hover");
        pixel.setAttribute("style", "background-color: #F6F3C2")
    });
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
    if (isRandom) {
        randomizeButton.setAttribute("style", "background-color: #4B9DA9;")
    }
    else {
        randomizeButton.setAttribute("style", "background-color: #E37434;")
    }
    draw();
})
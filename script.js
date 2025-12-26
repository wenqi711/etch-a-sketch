const pixelContainer = document.querySelector(".pixel-container");
let numOfPixelsPerSide = 16;
let hasGridlines = false;
let isGradientMode = false;
const colorPicker = document.querySelector("#color-picker");
setUpGrid(numOfPixelsPerSide);

function setUpGrid(num) {
    for (let i = 0; i < num; i++) {
        const pixelRow = document.createElement("div");
        pixelRow.classList.add("pixel-row");
        pixelContainer.appendChild(pixelRow);
        for (let j = 0; j < num; j++) {
            const pixel = document.createElement("div");
            const pixelContent = document.createElement("div");
            pixel.classList.add("pixel");
            pixelContent.classList.add("pixel-content");
            pixelRow.appendChild(pixel);
            pixel.appendChild(pixelContent);
            if (hasGridlines) {
                pixel.style.border = "0.5px dashed #91C6BC";
            }
        }
    }
    draw();
}

function draw() {
    document.querySelectorAll(".pixel-content").forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => {
            pixel.classList.add("colored");
            if (isRandom) {
                pixel.style.backgroundColor = getRandomColor();
            } else {
                pixel.style.backgroundColor = colorPicker.value;
            }
            const currentOpacity = +getComputedStyle(pixel).opacity
            if (isGradientMode && currentOpacity < 1) { 
                pixel.style.opacity = currentOpacity + 0.1;
            } else {
                pixel.style.opacity = 1;
            }
        })
    })
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
        document.querySelectorAll(".pixel-content").forEach(e => e.remove());
        setUpGrid(numOfPixelsPerSide);
    }
})

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function() {
    document.querySelectorAll(".colored").forEach( (pixel) => {
        pixel.classList.remove("colored");
        pixel.style.backgroundColor = "#F6F3C2";
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

let isRandom = false;
const randomizeButton = document.querySelector(".randomize-button");
randomizeButton.addEventListener("click", function() {
    isRandom = !isRandom;
    randomizeButton.classList.toggle("is-clicked");
})

colorPicker.addEventListener("click", () => {
    if (isRandom) {
        isRandom = !isRandom;
        randomizeButton.classList.remove("is-clicked");
    }
})

const gridlinesButton = document.querySelector(".gridlines-button");
gridlinesButton.addEventListener("click", () => {
    gridlinesButton.classList.toggle("is-clicked");
    hasGridlines = !hasGridlines;
    document.querySelectorAll(".pixel").forEach((pixel) => {
        if (hasGridlines) {
            gridlinesButton.textContent = "Hide gridlines";
            pixel.style.border = "0.5px dashed #91C6BC";
        } else {
            gridlinesButton.textContent = "Show gridlines";
            pixel.style.border = "none";
        }
    });
})

const gradientModeButton = document.querySelector(".gradient-mode-button");
gradientModeButton.addEventListener("click", () => {
    gradientModeButton.classList.toggle("is-clicked");
    isGradientMode = !isGradientMode;
})
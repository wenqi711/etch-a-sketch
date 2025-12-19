const pixelContainer = document.querySelector(".pixel-container");
const numOfPixelsPerSide = 16;

for (let i = 0; i < numOfPixelsPerSide; i++) {
    const pixelRow = document.createElement("div");
    pixelRow.classList.add("pixel-row");
    pixelContainer.append(pixelRow);
    for (let j = 0; j < numOfPixelsPerSide; j++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixelRow.append(pixel);
    }
}

const pixelList = document.querySelectorAll(".pixel");
for (let i = 0; i < pixelList.length; i++) {
    pixelList[i].addEventListener("mouseenter", () => {
        pixelList[i].classList.add("hover");
    });
}
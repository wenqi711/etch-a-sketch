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
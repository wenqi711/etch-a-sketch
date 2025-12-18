# etch-a-sketch

## Pseudocode

### Set up grid
I think I will set up the grid by row, so that each row is a flex item inside the flex container. If we have `flex-wrap: wrap;` for only the container and not the rows, then the rows will wrap in the container, but the flex items in each row will only stretch across the row. 

If we set the width and height of the container absolutely, and the number of items in each row is equal to the number of rows, then each item should be square. This also means that no matter how many elements we want per side, we can make sure that they will always be square.
```
GET pixelContainer from HTML
GET numOfPixelsPerSide
FOR i from 0 to numOfPixelsPerSide
    CREATE div element called pixelRow
    ADD pixelRow to pixelContainer
    FOR j from 0 to numOfPixelsPerSide
        CREATE div element called pixel
        ADD pixel to pixelRow
    ENDFOR
ENDFOR
```
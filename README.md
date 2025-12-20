# TOP Project #4

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

### Set up "hover" effect

We want to set up an event listener for when the mouse moves into each 'pixel'. We can do this by selecting each item with class `.pixel` and adding a new class to the div. We can then set the CSS for this new class.

```
GET pixelList as the list of items with class .pixel
FOR item of pixelList
    ADD eventListener for mouseOver so item has class .hover
ENDFOR
```

### Create a new grid

To create a new grid, we would need to remove all the `.pixel-row` and `.pixel` div elements in our pixel container. We then need to follow the same procedure as above. We can easily do this by creating a function for setting up a grid, which takes a parameter as the number of pixels per side. We need to set hard limits for the input so that the user can only input an integer between 3 and 100. This should leave the grid as is if the user leaves the input blank or enters a string.

I'm going to experiment with creating a slider for this once I'm otherwise done with the project. This should automatically restrict the numbers that the user can select.

```
GET userSelection and change to Number
IF userSelection > 2 AND userSelection < 101 AND userSelection is an integer THEN
    SET numOfPixelsPerSide to userSelection
    REMOVE all div elements with class .pixel-row
    REMOVE all div elements with class .pixel
    CALL FUNCTION setUpGrid(numOfPixelsPerSide)
ELSE
    DISPLAY "This is not a valid input. Please select a number between 3 and 100."
```

### Get random colours

```
SET HEXDIGITS = '0123456789ABCDEF'
SET color = '#'
FOR i from 0 to 6
    ADD HEXDIGITS[randomNumber between 0 and 15] to color
ENDFOR
DISPLAY color
```
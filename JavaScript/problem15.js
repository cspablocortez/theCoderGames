let grid = ""

for (let y = 0; y < 8; y++) { // columns ↕️
    for (let x = 0; x < 8; x++) { // rows ↔️
        if ((x + y) % 2 == 0) {             // if x + y is even, note: x + y is the sum of the coordinates.
            grid += "⬛️"
        } else {
            grid += "⬜️"
        }
    }
    grid += "\n"
}

console.log(grid)
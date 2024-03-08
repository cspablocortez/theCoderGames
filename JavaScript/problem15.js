function generatePascalsTriangle(n) {
    for (let row = 0; row < n; row++) {
        let number = 1; // The first number in a row is always 1
        let output = ""; // This is where we'll build the string for the row
        for (let col = 0; col <= row; col++) {
            output += number + " "; // Add the current number to the output string
            number = number * (row - col) / (col + 1); // Calculate the next number in the row
        }
        console.log(output.trim()); // Print the row and remove any trailing space
    }
}

generatePascalsTriangle(7);
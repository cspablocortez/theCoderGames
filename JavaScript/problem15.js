function generatePascalsTriangle(nRows) {
    let triangle = [];

    for (let row = 0; row < nRows; row++) {
        triangle[row] = [];
        triangle[row][0] = 1; 

        for (let col = 1; col < row; col++) {
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }

        if (row > 0) {
            triangle[row][row] = 1;
        }
    }

    return triangle;
}
  
function printPascalsTriangle(triangle) {
    for (let row of triangle) {
        console.log(row.join(' '));
    }
}


let pascalsTriangle = generatePascalsTriangle(7);
printPascalsTriangle(pascalsTriangle);

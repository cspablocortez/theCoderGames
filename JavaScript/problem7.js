const list = [1, 2, 3, 4, 5]
let squares = []

function square(x) {
    return x * x
}

for (let i = 0; i < list.length; i++) {
    squares.push(square(list[i]))
}

console.log(squares)
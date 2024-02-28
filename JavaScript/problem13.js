const arr = [1, 3, 3, 5, 7, 2, 6, 71, 16]

function repeatedNumber(arr, number) {
    let nextTo = false

    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`Current: ${arr[i]} -- Next: ${arr[i + 1]}`)

        if (arr[i] === arr[i + 1]) {
            nextTo = true
            break
        } 
    }

    return nextTo
}

console.log(repeatedNumber(arr, 3))  
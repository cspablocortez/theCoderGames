const list = []
let number = 0

for (let i = 0; i < 6; i++) {
    number = Math.random()
    if (number >= 0.5) {
        list.push(0)
    } else {
        list.push(1)
    }
}

console.log(list)
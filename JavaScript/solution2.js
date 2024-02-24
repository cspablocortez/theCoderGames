for (let i = 1; i < 100; i++) {
    console.log(i % 8 == 0 ? i : '')
}


// another way
for (let i = 1; i < 100; i++) {
    if (i % 8 != 0) {
        console.log(i)
    }
}
const str = 'mouseratmouse'

function solution(str) {
    mouseCount = str.match(/mouse/gi)
    console.log(mouseCount)
    ratCount = str.match(/rat/gi)
    console.log(ratCount)

    console.log(mouseCount.length == ratCount.length)
}

solution(str)
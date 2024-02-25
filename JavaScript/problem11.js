const str = 'string'
let myArr = []

function insertCommas(str) {
    myArr = str.split("")
    for (let i = 0; i < myArr.length; i++) {
        myArr[i] = myArr[i] + ','
    }
    return myArr.join("")
}

console.log(insertCommas(str))
const sentence = 'Good days give happiness, bad days give experience, the days I dislike give lessons, and the days I love give memories.'

function exaggerate(sentence) {
    wordArr = sentence.split(" ")
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == "Good") {
            wordArr[i] = "Great"
        }
        if (wordArr[i] == "bad") {
            wordArr[i] = "terrible"
        }
      if (wordArr[i] == "like") {
            wordArr[i] = "love"
      }
      if (wordArr[i] == "dislike") {
            wordArr[i] = "hate"
      }
    }
    return wordArr.join(" ")
}

function exaggerate2(sentence) {
    return sentence
            .replace(/good/gi, "Great")
            .replace(/dislike/gi, "hate")
            .replace(/bad/gi, "terrible")
            .replace(/like/gi, "love")
}

console.log(exaggerate(sentence))
console.log(exaggerate2(sentence))
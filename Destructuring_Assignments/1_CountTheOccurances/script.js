// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurances of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and objects

function wordCountGenerator(inputString) {

    // inputString = [...inputString]
    const words = inputString.toLowerCase().split(/\W+/)
    const map = new Map()
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const count = map.get(word) || 0
        map.set(word, count + 1)
    }
    console.log(map)
}

wordCountGenerator("salman shaikh is the full stack web developer, Salman")

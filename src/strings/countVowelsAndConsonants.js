const countVowelsAndConsonants = (str) => {
    let vowels = 0
    let consonants = 0

    const listOfVowels = 'aeiou'.split('')
    const listOfConsonants = 'qwrtypsdfghjklzxcvbnm'.split('')

    str.toLowerCase().split('').forEach(char => {
        if (listOfVowels.includes(char)) {
            vowels++
        } else if (listOfConsonants.includes(char)) {
            consonants++
        }
    })

    return {
        vowels,
        consonants
    }
}

console.log(countVowelsAndConsonants('Qwredgf asdasfasdfasdf asdf asdfasd fasdfasdf'))
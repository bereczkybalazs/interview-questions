const isAnagram = (originalString, comparedString) => {

    const sortLetters = (str) => {
        return str.split('').sort().join('')
    }

    return sortLetters(originalString) === sortLetters(comparedString)
}

console.log(isAnagram('word', 'drow'))
console.log(isAnagram('word', 'drodw'))
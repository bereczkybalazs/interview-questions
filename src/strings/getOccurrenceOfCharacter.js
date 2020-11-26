const getOccurrenceOfCharacter = (str, characterToCount) => {
    return str.split('').filter(char => char === characterToCount).length
}

console.log(getOccurrenceOfCharacter('aaaasdsfsdfasdfpppp', 'p'))
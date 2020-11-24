const getDuplicateCharacters = (str) => {
    const strArray = str.split('')
    const duplicateCharacters = []
    strArray.reduce((uniqueArray,char) => {
        if (!uniqueArray.includes(char)) {
            uniqueArray.push(char)
        } else {
            duplicateCharacters.push(char)
        }
        return uniqueArray
    }, [])

    const transformedDuplicateCharacters = duplicateCharacters.reduce((transformedArr, char) => {
        const charIndex = transformedArr.findIndex(item => item.char === char)
        if (charIndex > -1) {
            transformedArr[charIndex].count++
        } else {
            transformedArr.push({
                char,
                count: 2
            })
        }
        return transformedArr
    }, [])

    return transformedDuplicateCharacters
}

console.log(getDuplicateCharacters('asdf123asda'))
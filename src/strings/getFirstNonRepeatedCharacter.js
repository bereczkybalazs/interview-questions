const getFirstNonRepeatedCharacter = (str) => {
    const duplicates = []
    const uniques = str.split('').reduce((uniques, char) => {
        if (!uniques.includes(char) && !duplicates.includes(char)) {
            uniques.push(char)
        } else {
            uniques = uniques.filter(uniqueChar => uniqueChar !== char)
            duplicates.push(char)
        }
        return uniques
    }, [])

    return uniques[0]
}

console.log(getFirstNonRepeatedCharacter('ababddeef'))
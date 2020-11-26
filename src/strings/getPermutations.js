const getPermutations = (str) => {
    if (!str && typeof str !== 'string') {
        return []
    } else if (str.length < 2) {
        return [str]
    }
    const permutations = []

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let remainingChars = str.substring(0, i) + str.substring(i + 1)

        for (let permutation of getPermutations(remainingChars)) {
            permutations.push(char + permutation)
        }
    }

    return permutations
}

console.log(getPermutations('asd'))
const getAllDuplicateNumbers = (arr) => {
    const uniqueNumbers = []
    const duplicateNumbers = []
    arr.forEach(item => {
        if (!uniqueNumbers.includes(item)) {
            uniqueNumbers.push(item)
        } else if (!duplicateNumbers.includes(item)) {
            duplicateNumbers.push(item)
        }
    })

    return duplicateNumbers
}

console.log(getAllDuplicateNumbers([1, 1, 2, 1, 3, 3]))
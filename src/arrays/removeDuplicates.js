const removeDuplicates = (arr) => {
    return arr.reduce((filteredArray, item) => {
        if (!filteredArray.includes(item)) {
            filteredArray.push(item)
        }
        return filteredArray
    }, [])
}

console.log(removeDuplicates([1, 2, 3, 1]))
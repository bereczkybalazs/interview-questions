const removeDuplicatesWithoutCollection = (arr) => {
    let uniqueArray = []
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}

console.log(removeDuplicatesWithoutCollection([1, 2, 3, 4, 3]))
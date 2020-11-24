const getPairsWithSumEqual = (arr, sum) => {
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([
                    arr[i], arr[j]
                ])
            }
        }
    }
    return pairs
}

console.log(getPairsWithSumEqual([1, 2, 3, -1, 4], 3))
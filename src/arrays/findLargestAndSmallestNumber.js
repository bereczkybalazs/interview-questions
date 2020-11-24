const findLargestAndSmallestNumber = (arr) => {
    const smallestNumber = Math.min(...arr)
    const largestNumber = Math.max(...arr)
    console.log('smallest number', smallestNumber)
    console.log('largest number', largestNumber)
}

findLargestAndSmallestNumber([1, 2, 3, 4])
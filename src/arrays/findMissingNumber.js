const findMissingNumber = (arr) => {
    const sumOfArray = arr.reduce((sum, currentNumber) => {
        return sum + currentNumber
    }, 0)

    let sumOfTotal = 0;
    for (let i = 1; i < arr.length + 2; i++) {
        sumOfTotal += i
    }
    return sumOfTotal - sumOfArray
}

const arr = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr))
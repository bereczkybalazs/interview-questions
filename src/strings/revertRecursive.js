const revertRecursive = (str) => {
    if (str.length < 2) {
        return str
    }
    return revertRecursive(str.substring(1)) + str.charAt(0)
}

console.log(revertRecursive('asd'))
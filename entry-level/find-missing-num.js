function findMissingNumber(arr) {
    const n = arr.length + 1;
    const actualSum = (n * (n + 1)) / 2;

    // You can also use the for loop to do this
    const calcuatedSum = arr.reduce((sum, num) => sum + num, 0);

    return actualSum - calcuatedSum;
}

console.log(findMissingNumber([1, 2, 3, 5]));

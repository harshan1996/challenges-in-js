function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersectionElements = [];

    for (let num of arr2) {
        if (set1.has(num)) {
            intersectionElements.push(num);
        }
    }

    return intersectionElements;
}

console.log(arrayIntersection([1, 4, 5], [1, 2, 3, 4, 5, 6]));

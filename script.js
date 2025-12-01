let arr = [1, 2, 3, 4, 5];
let max = arr.reduce((max, min) => {
    if (max > min) {
        return max;
    } else {
        return min;
    }
})


console.log(max);

function maxNum(...nums) {
    let max = nums[0];
    for (let n of nums) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

console.log(maxNum(1, 2, 3, 4, 5, 67))
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

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay)
    })
}

changeColor("red",1000).then(()=>{
    return changeColor("blue",1000);
}).then(()=>{
    return changeColor("yellow",1000)
}).catch(()=>{
    console.log("color not change :")
})
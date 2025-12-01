// let arr = [1, 2, 3, 4, 5];
// let max = arr.reduce((max, min) => {
//     if (max > min) {
//         return max;
//     } else {
//         return min;
//     }
// })


// console.log(max);

// function maxNum(...nums) {
//     let max = nums[0];
//     for (let n of nums) {
//         if (n > max) {
//             max = n;
//         }
//     }
//     return max;
// }

function getRandom() {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            console.log(random); resolve()
            
        }, 2000)
        
    })
}


async function demo() {
  await  getRandom();
  await  getRandom();
  await  getRandom();
  await  getRandom();
  await  getRandom();
}

demo();
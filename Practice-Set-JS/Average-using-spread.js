arr = [1,2,3,4,5,6,7,8,9]
// const avg = (...a) =>{
//     let b = 0
//     for (const num of a ) {
//         b += num
//     }
//     return b/a.length
// }
// console.log(avg(...arr))

//2nd method
let sum = [...arr].reduce((a,b) => a+b)
let avg = sum/arr.length
console.log(avg)
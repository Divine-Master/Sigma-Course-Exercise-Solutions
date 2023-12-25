// let a = prompt('Enter a Number.');
let a = 16;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b )
    console.log(arr)
    console.log(c)
}

console.log(factorial(a))
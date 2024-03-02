// function tryprom() {
//     let prom1 = Promise.resolve('dj')
//     let prom2 = Promise.resolve(48)
//     let prom3 = Promise.resolve('i58')
//     let a = Promise.all([prom1,prom2,prom3])
//     console.log(a,typeof a)
// }
async function tryprom() {
    let a = await Promise.resolve('iufn')
    let b = await Promise.resolve('87')
    let c = await Promise.resolve('uih')
    let d = [a,b,c]
    console.log(d)
}
tryprom()

/*
When we use async/await it returns an array but when we don't use it we get a promise object in return which contains the values of the array.
*/
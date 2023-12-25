let a = prompt('Enter a Number.');

function factorial(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    console.log(fac)
}

factorial(a)
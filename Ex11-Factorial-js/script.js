let input = prompt('Enter a Number.');

const num = (a)=>{
    a = parseInt(a);
    arr = [];
    for (a; a > 1; a--) {
        const element = a;
        arr.push(a);
    }
    function facto(a,b) {
        return a*b
    }
    console.log(arr.reduce(facto));
}

num(input);
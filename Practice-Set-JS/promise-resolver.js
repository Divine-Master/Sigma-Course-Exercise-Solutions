(async function main(n){
    let prom = await new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('devdutt')
        }, n);
    });
    console.log(prom)
})(2000)
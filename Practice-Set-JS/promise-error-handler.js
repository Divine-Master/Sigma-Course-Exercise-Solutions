async function main() {
    let a = await new Promise((resolve, reject) => {
        setTimeout(function(){
            reject(new Error('It is your fate.'))
        }, 3000);
    });
    return a;
};

(async () => {
    try {
        let s = await main();
        console.log(s);
    } catch (e) {
        console.error(e);
    }
})();
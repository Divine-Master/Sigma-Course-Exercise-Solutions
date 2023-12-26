let arrColor = ['orange', 'green', 'blue', 'red', 'yellow', 'cyan', 'aqua', 'teal', 'pink', 'purple'];

function generateRandom(a) {
    let randomnum = Math.floor(Math.random() * 10);
    return a[randomnum];
}

window.onload = (e=>{
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = generateRandom(arrColor);
        e.style.color = generateRandom(arrColor);
    });
})

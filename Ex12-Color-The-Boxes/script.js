document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".box").forEach(e => {
    let arrColor = ['orange', 'green', 'blue', 'red', 'yellow', 'cyan', 'aqua', 'teal', 'pink', 'purple'];
    let randomnum = Math.floor(Math.random() * 10);
    let newColor = arrColor[randomnum];
    e.style.backgroundColor = newColor;
    let randomnum2 = Math.floor(Math.random() * 10);
    let newColor2 = arrColor[randomnum2];
    e.style.color = newColor2;
  });
});
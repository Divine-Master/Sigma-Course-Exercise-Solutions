let a = prompt('Enter your first number:');
let b = prompt('Enter your operation:');
let c = prompt('Enter your second number:');
let random = Math.random();
let obj = {
  '+': '-',
  '*': '+',
  '-': '/',
  '/': '**'
};
alert(random);

const calculator = (a, b, c) => {
  a = parseInt(a);
  c = parseInt(c);
  if (b === '+') {
    alert(a + c);
  } else if (b === '-') {
    alert(a - c);
  } else if (b === '*') {
    alert(a * c);
  } else if (b === '/') {
    alert(a / c);
  } else if (b === '**') {
    alert(a ** c);
  } else {
    alert('Invalid operation.');
  }
};

if (random > 0.1) {
  calculator(a, b, c);
} else {
  b = obj[b];
  calculator(a, b, c);
}
let arr = [1,-2,3,4,-5,6]
function sum_selector(a) {
  let sum = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i]>=0) {
    sum += a[i]
  }
    else {
      i = a.length
    }
  }
  console.log(sum);
}

sum_selector(arr)
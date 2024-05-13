function vowelCounter(str) {
  let count = 0
  let a = str.toLowerCase()
  for (let i = 0; i < a.length; i++) {
    if(/[a,e,i,o,u]/.test(a[i])){
      count += 1;
    }
  }
  console.log(count);
}

vowelCounter('WOrld is mine territory.')
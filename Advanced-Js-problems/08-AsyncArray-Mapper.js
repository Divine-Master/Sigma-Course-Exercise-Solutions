async function multiplyAfterDelay(numbers) {
  const promises = [];
  for (const num of numbers) {
    promises.push(new Promise((resolve) => {
      setTimeout(() => resolve(num * 2), 500);
    }));
  }
  return Promise.all(promises);
}
console.log(multiplyAfterDelay([1,2,3,4,5,6,7,8,9,10]));
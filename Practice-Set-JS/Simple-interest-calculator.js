const simpleInterestCalculator = () => {
    let p = parseInt(prompt('Enter the Principal Amount'));
    let r = parseInt(prompt('Enter The Rate of Interest per year'));
    let t = parseInt(prompt('Enter the Time Period in Years'));
    let h = 1 + (r * t);
    let q = p * h;
    console.log(`The simple interest is ${q}`);
};

simpleInterestCalculator()
class ComplexNum{
    constructor(real, imaginary){
        this.real = real
        this.imaginary = imaginary
        console.log(`The Complex Number is = ${real} + ${imaginary + 'i'}`)
    }
    add(other){
        let addedReal = this.real + other.real;
        let addedImaginary = this.imaginary + other.imaginary;
        console.log(`The Sum is = ${addedReal} + ${addedImaginary + 'i'}`)
    }
}

let cnum = new ComplexNum(3,2);
let cnum2 = new ComplexNum(4,3);
cnum2.add(cnum)
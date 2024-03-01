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
    get showReal(){
        return this.real;
    }
    get showImag(){
        return this.imaginary;
    }
    set chgReal(newReal){
        this.real =  newReal;
    }
    set chgImag(newImaginary){
        this.imaginary =  newImaginary;
    }
}

let cnum = new ComplexNum(3,2);
let cnum2 = new ComplexNum(4,3);
cnum2.add(cnum)
// console.log(cnum.showReal)
// console.log(cnum.showImag)
// cnum.chgReal = 2
// console.log(cnum.showReal)
// cnum2.add(cnum)

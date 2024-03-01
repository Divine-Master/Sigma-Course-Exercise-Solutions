class Human{
    constructer(){
        console.log('This is a Human')
    }
    
    wake(){
        console.log('Human waked up.')
    }
}

class Student extends Human{
    constructer(){
        console.log('This is a Humanic student.')
    }
    
    wake(){
        super.wake()
        console.log('The Humanic Student Waked up.')
    }
}

let st = new Student()
st.wake()

console.log(Student instanceof Human); //True
let a = [1,2,2,'dev','fed'];
function doubleIt(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==arr[i+1]){
            console.log(arr[i]+arr[i])
            console.log(arr[i+1])
            i++
        }
        else{
            console.log(arr[i]+arr[i])
        }
    }
}

doubleIt(a)
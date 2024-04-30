console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

let btn = document.getElementById('send')

btn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    let resu = document.getElementById('result')
    resu.innerHTML = `<img width="123" src="logos/loading.svg" alt="">`
    let key = "ema_live_21xNVschhuh0vk3PjmIL1wB3TXIRvxylXyQIy9YQ"
    let email = document.getElementById("user").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    resu.innerHTML = str
})





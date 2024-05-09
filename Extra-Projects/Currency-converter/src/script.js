const populate = async(value,currency)=>{
  let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_k5obAE34hFpLyk5bXa91GsrCIrmAQ5fC1yqwGxKe&base_currency=" + currency;
  let resu = await fetch(url)
  let str;
  let final = await resu.json()
  let res = document.getElementById('res')
  for(let key of Object.keys(final['data'])){
    str += `<tr>
              <td>${key}</td>
              <td>${final['data'][key]['code']}</td>
              <td>${final['data'][key]['value']*value}</td>
            </tr>
  `
  }
  res.innerHTML = str;
}
let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
  let amount = parseInt(document.getElementById('amount').value)
  let cur = document.getElementById('sel').value
  populate(amount,cur)
})
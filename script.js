fetch("logs.json")
.then(res => res.json())
.then(data => {

let table = document.querySelector("#logTable tbody")

let weekAgo = Date.now()/1000 - (7*24*60*60)

data.forEach(log => {

if(log.time >= weekAgo){

let row = document.createElement("tr")

row.innerHTML = `
<td>${log.player}</td>
<td>${log.userid}</td>
<td>${log.action}</td>
<td>${new Date(log.time*1000).toLocaleString()}</td>
`

table.appendChild(row)

}

})

})

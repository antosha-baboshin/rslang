import Aut from "../api/aut";

const serv=process.env.SERVER
const aut = new Aut();
aut.loadUser()

console.log('statistic user',aut)
const idstat= document.getElementById("statisic") as HTMLInputElement;


function loadStat (){

    idstat.innerHTML=`<div>User: ${aut.name}</div>
    <img class="logo" src="${aut.avatara}"  width="20"> `


     fetch(`${serv}/users/${aut.id}/statistics`, {
      method: 'GET',   headers: {
        'Authorization': `Bearer ${aut.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
   }).then( 
      async  res => {
        const data=  await res.json()
        addstat(data.optional.right,data.optional.wrong)
   }).catch(()=>addstat(0,0))
}

function addstat (right:number,wrong:number){
    idstat.innerHTML +=`<div>Сегодня верных ответов: ${right}</div> 
    <div>Сегодня ошибок: ${wrong}</div>          `
}
if (aut.id!='') {loadStat ()}
else
{idstat.innerHTML +=`<div>User not authorized</div>`}
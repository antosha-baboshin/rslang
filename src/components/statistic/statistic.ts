import './css/statistic.css'
import Aut from "../api/aut";

const serv=process.env.SERVER
const aut = new Aut();
aut.loadUser()

let rCh=0
let wCh=0
let rSp=0
let wSp=0


console.log('statistic user')
const idstat= document.getElementById("statisic") as HTMLInputElement;
const data = new Date();
const dat = data.getFullYear()+data.getMonth()*10000+data.getDate()*1000000 

function loadStat (){

    idstat.innerHTML=`<div>User: ${aut.name}</div>
    <img class="logo" src="${aut.avatara}"  width="100"> `


     fetch(`${serv}/users/${aut.id}/statistics`, {
      method: 'GET',   headers: {
        'Authorization': `Bearer ${aut.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
   }).then( 
      async  res => {
        const data=  await res.json()
        if (data.optional.data==dat) {
                if ('challenge' in data.optional) {
                  rCh =data.optional.challenge.right; 
                  wCh =data.optional.challenge.wrong ;
                }
                if ('sprint' in data.optional) {
                  rSp =data.optional.sprint.right; 
                  wSp =data.optional.sprint.wrong ;
                }
              } 

           addstat()
        } 
   ).catch(()=>addstat())
}

function addstat (){

    const idstatSp= document.getElementById("statisicSp") as HTMLInputElement;
    const idstatCh= document.getElementById("statisicCh") as HTMLInputElement;
    idstat.innerHTML +=`<div>Correct answers today: ${rSp+rCh}</div> 
    <div>Today errors: ${wSp+wCh}</div> `         
    
    idstatSp.innerHTML +=`<div>Correct answers today: ${rSp}</div> 
    <div>Today errors: ${wSp}</div> `

    idstatCh.innerHTML +=`<div>Correct answers today: ${rCh}</div> 
    <div>Today errors: ${wCh}</div> `
}

if (aut.id!='') {loadStat ()}
else
{idstat.innerHTML +=`<div>You will have access to Statistics after authorization</div>`}
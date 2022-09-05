import Aut from "./aut";

const serv=process.env.SERVER
const aut = new Aut();
aut.loadUser()

type Gamedata={
  right: number;
  wrong: number;
}

type Stat = {
    data: number;
  }

 export async function statistic (right:number, wrong:number,game:string, url?:string){
    if (aut.id !='')
    {
      const data = new Date();
      const dat = data.getFullYear()+data.getMonth()*10000+data.getDate()*1000000 
    let gamedat:Gamedata= {
      right:0,
      wrong:0
    };
    let optional;
    optional={};
    const  res= await fetch(`${serv}/users/${aut.id}/statistics`, {
      method: 'GET',   headers: {
        'Authorization': `Bearer ${aut.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
   })  
   if (res.ok) {
       const data = await res.json();
       const dataStat= await data.optional 
       if (dataStat.data==dat) {optional=dataStat; if (game in optional) gamedat=dataStat[game]} 
     } else {optional={}; console.log('none statistic ')} ;

   optional.data=dat
   gamedat.right += right;
   gamedat.wrong += wrong; 
   optional[game]=gamedat;

   
   addStat(optional);
   }
   if (url) window.location.href =url
   
  }
  
  function addStat (sts:{}){
    console.log(JSON.stringify({
      "learnedWords": 0,
      "optional": sts,
    }))
    const  res= fetch(`${serv}/users/${aut.id}/statistics`, {
      method: 'PUT',   headers: {
        'Authorization': `Bearer ${aut.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({
        "learnedWords": 0,
        "optional": sts,
      })
   })  
}

  

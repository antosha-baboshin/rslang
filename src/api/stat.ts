import Aut from "./aut";

const serv=process.env.SERVER
const aut = new Aut();
aut.loadUser()


type stat = {
    data: number;
    right: number;
    wrong: number;
  }

 export async function statistic (right:number, wrong:number, url:string){
    console.log('statistic ',right,wrong, 'user ',aut)
    if (aut.id !='')
    {
    let dataStat:stat= {
      data: 0,
      right: 0,
      wrong: 0 ,
    };
    const  res= await fetch(`${serv}/users/${aut.id}/statistics`, {
      method: 'GET',   headers: {
        'Authorization': `Bearer ${aut.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
   })  
   if (res.ok) {
       const data = await res.json();
       dataStat= await data.optional as stat;
   } else   console.log('none statistic ');
   
   const dat = new Date().getDate();
   if (dataStat.data!=dat) { dataStat.right=0; dataStat.wrong=0}
   dataStat.right += right;
   dataStat.wrong += wrong; 
   dataStat.data=dat;

   addStat(dataStat);
   window.location.href =url
   }
  }
  
  function addStat (sts:stat){

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

  

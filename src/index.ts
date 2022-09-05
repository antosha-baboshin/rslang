import "./css/styles.css"

import Aut from "./components/api/aut";

const aut = new Aut();
aut.loadUser()
//aut.newToken()

const profile_icon= document.getElementById("profile_icon") as HTMLInputElement;
if (profile_icon && aut.avatara!='') profile_icon.src=aut.avatara

document.getElementById('stsprint')!
  .addEventListener("click", ()=>window.location.href =`./sprint/sprint-main.html` )  

  document.getElementById('stchallenge')!
  .addEventListener("click", ()=>window.location.href =`./challenge/challenge-main.html` )  

  document.getElementById('statistics')!
  .addEventListener("click", ()=>window.location.href =`./statistic/statistic.html` )  


console.log('1');
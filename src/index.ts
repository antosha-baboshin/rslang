import "./css/reset.css"
import "./css/base.css"
import "./css/main.css"
import "./css/sidebar.css"
//import "./assets/fonts/circular/stylesheet.css"
//import "./assets/fonts/sofia-pro/stylesheet.css"

import Aut from "./api/aut";

const aut = new Aut();
aut.loadUser()
aut.newToken()
aut.savUser()


const profile_icon= document.getElementById("profile_icon") as HTMLInputElement;
if (profile_icon && aut.avatara!='') profile_icon.src=aut.avatara

console.log('SERVER: ',process.env.SERVER)

document.getElementById('stsprint')!
  .addEventListener("click", ()=>window.location.href =`./sprint/sprint-main.html` )  

  document.getElementById('stchallenge')!
  .addEventListener("click", ()=>window.location.href =`./challenge/challenge-main.html` )  


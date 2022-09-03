import "./css/reset.css"
import "./css/base.css"
import "./css/main.css"
import "./css/sidebar.css"
//import "./assets/fonts/circular/stylesheet.css"
//import "./assets/fonts/sofia-pro/stylesheet.css"

import Aut from "./api/aut";

const aut = new Aut();
aut.newToken()
aut.savUser()

console.log('SERVER: ',process.env.SERVER)

document.getElementById('stsprint')!
  .addEventListener("click", ()=>window.location.href =`./sprint/sprint-main.html` )  

  document.getElementById('stchallenge')!
  .addEventListener("click", ()=>window.location.href =`./challenge/challenge-main.html` )  


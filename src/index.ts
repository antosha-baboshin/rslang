import "./css/styles.css"

import Aut from "./components/api/aut";

const aut = new Aut();
aut.loadUser()
//aut.newToken()

const profile_icon= document.getElementById("profile_icon") as HTMLInputElement;
if (profile_icon && aut.avatara!='') profile_icon.src=aut.avatara

const show_name= document.getElementById("showname") as HTMLInputElement;
  if (show_name && aut.name!='') show_name.innerText=aut.name

document.getElementById("usrsignout")!.addEventListener("click",()=>{aut.SignOut();
  profile_icon.src='./assets/img/header-img.jpeg'
  show_name.innerText='Log In'
})


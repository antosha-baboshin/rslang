import './css/challenge-main.css'

document.getElementById('chellevelbutton')!
  .addEventListener("click", (e)=>{
        const level =(e.target as  HTMLElement).getAttribute('level')
        window.location.href =`./challenge-play.html?level=${level}`

    } )  

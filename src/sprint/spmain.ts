import './css/sprint-main.css'

document.getElementById('splevelbutton')!
  .addEventListener("click", (e)=>{
        const level =(e.target as  HTMLElement).getAttribute('level')
        window.location.href =`./sprint-play.html?level=${level}`

    } )  

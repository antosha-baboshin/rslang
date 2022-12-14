import './css/challenge-play.css'
import {statistic} from "../api/stat";

const url =new URL(window.location.href)
const MAX_PAGE = 100
let level = 0
const MAX_OTV=5
const MAX_ANSWER=10
const serv=process.env.SERVER

if (url.searchParams.get('level')) level=Number(url.searchParams.get('level'))

console.log('challenge PLAY level ',level)

type word ={
    group:  number, 
    page:   number, 
    word:   string, 
    image:  string, 
    audio:  string, 
    audioMeaning:  string, 
    audioExample:  string, 
    textMeaning:   string, 
    textExample:   string,     
    transcription: string,  
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string
  }

let answer=0;  
let wrng=false;
const wrongW:word[]=[];
const rightW:word[]=[];

let words:word[]=[];
let wrd:word;
const reswrd:word[]=[];
const ideng= document.getElementById("engwrld") as HTMLInputElement;
const showimg= document.getElementById("showimg") as HTMLInputElement;

async function getWords(lvl:number,pag:number){
   const  res= await fetch(`${serv}/words?group=${lvl}&page=${pag}`, {
     method: 'GET',
  })
   
  if (res.ok) {
      
      const data = await res.json() as word[];
      words= words.concat(data.slice(0));
     // if (pag==5) {game() }
      
  } else   console.log('ERROR ',res);

}

for (let i=0; i<=MAX_PAGE; i++ ){
 getWords(level,i)    
}

function game(){
  wrng=false;
  ideng.innerText='';
  showimg.src="../assets/img/header-img.jpeg";
  const idspsword= document.getElementById("spsword") as HTMLInputElement;
  idspsword.innerHTML =''
  for (let i=0;i<MAX_OTV;i++){
   reswrd[i]= words[Math.trunc(Math.random()*words.length)];
   idspsword.innerHTML += addSpsWrd(reswrd[i],i+1)
    }
  const rnd= Math.trunc(Math.random()*(MAX_OTV))
  wrd=reswrd[rnd];
  
  playaudio(`${serv}/${wrd.audio}`)

  }

function addSpsWrd(w:word,num:number){
  return `<div class="one-word-wrapper"> 
   <div class="circle small-text" id="cicle${num}" answer="${num}">${num}</div> 
   <div class="rus-text" id="word${num}">${w.wordTranslate}</div> 
   </div>`
}

function ans(num:number)
{ if (num>0 && num<=MAX_OTV){
    const circle = document.getElementById(`cicle${num}`) as HTMLInputElement;
    if (circle){
     if (reswrd[num-1].word==wrd.word) 
       {circle.style.backgroundColor="rgb(219, 176, 245)";   
       playaudio("../assets/sound/right.mp3") 
       if (!wrng) rightW.push(wrd)
       wrng=true;
      }
    else 
    {
     if (!wrng) wrongW.push(wrd) 
     wrng=true;
     circle.style.backgroundColor="rgb(255, 71, 125)";  
    playaudio("../assets/sound/error.mp3") 
    }
    }
  }
}
const wrong = document.getElementById('spsword') as HTMLInputElement;
wrong.addEventListener("click", (e)=>{

  const circle = e.target as  HTMLElement
  const answ =circle.getAttribute('answer') 
  if (answ)  ans(Number(answ))
    }, false);


const clkvoice = document.getElementById('clkvoice') as HTMLInputElement;
clkvoice.addEventListener("click",() => {
       playaudio(`${serv}/${wrd.audio}`)
   }  )
  
 function playaudio(src:string){
          const audio = new Audio(src);
          audio.play()
         }

         
  const idplay = document.getElementById('idplay') as HTMLInputElement;
  idplay.addEventListener("click",() => {
       answer +=1;
       if (answer==MAX_ANSWER){
            sessionStorage.setItem('spknown', JSON.stringify(rightW));
            sessionStorage.setItem('spnotknown', JSON.stringify(wrongW));
            statistic(rightW.length, wrongW.length, 'challenge', `./challenge-final.html`)
      
      }
       game()
   }  )

   const iddont = document.getElementById('iddont') as HTMLInputElement;
   iddont.addEventListener("click",() => {
    if (wrd){
        ideng.innerText=wrd.word as string
        showimg.src=`${serv}/${wrd.image}`
        playaudio(`${serv}/${wrd.audio}`)
    }
      }  )

  document.addEventListener("keypress",(key) => {
    if (key.key>='1' && key.key<='9') ans(Number(key.key))
  })
  
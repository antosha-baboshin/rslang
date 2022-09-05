import { deleteWordProgress, plusWordProgress } from '../api/usersWords';
import { Word } from '../ebook/utilities/interfaces/interfaces';
import './css/sprint-final.css'
const serv=process.env.SERVER

console.log('FINAL')
const know=document.getElementById('spknow') as  HTMLInputElement ;
const notknow=document.getElementById('spnotknow') as  HTMLInputElement ;

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
  
  
let knwords:word[]=[];
know.innerHTML='';

if (sessionStorage.getItem('spknown')!==null) knwords=JSON.parse(sessionStorage.getItem('spknown') as string);

knwords.forEach((a)=> {
  know.innerHTML=know.innerHTML+spis(a);
  plusWordProgress(a as Word);
})

let notkwords:word[]=[];
notknow.innerHTML='';
if (sessionStorage.getItem('spnotknown')!==null) notkwords=JSON.parse(sessionStorage.getItem('spnotknown') as string);

notkwords.forEach((a)=> {
   notknow.innerHTML=notknow.innerHTML+spis(a);
   deleteWordProgress(a as Word);
})


function spis(wrd:word){
     return `<li class="words"> <img src="../assets/icons/audiocall.svg" alt="voice" class="voice" audio="${wrd.audio}">  ${wrd.word} - ${wrd.wordTranslate}</li>`
    //return `<li class="words"><img src="${serv}/${wrd.image}" alt="voice" class="voice" audio="${wrd.audio}">${wrd.word} - ${wrd.wordTranslate}</li>`

}

document.getElementById('spplayagain')!
  .addEventListener("click", ()=>window.location.href =`./sprint-main.html` )  

know.addEventListener("click",(e) => {
    const src=(e.target as  HTMLElement).getAttribute('audio') as string;
    if (src) playaudio(src)
 }  )

 notknow.addEventListener("click",(e) => {
    const src=(e.target as  HTMLElement).getAttribute('audio') as string;
    if (src) playaudio(src)
 }  )

function playaudio(src:string){
        const audio = new Audio(serv+'/'+src);
        audio.play()
       }
    
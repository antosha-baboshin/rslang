import './css/challenge-final.css'
const serv=process.env.SERVER

console.log('FINAL')
const know=document.getElementById('spknow') as  HTMLInputElement ;
const notknow=document.getElementById('spnotknow') as  HTMLInputElement ;

type word ={
    group:  Number, 
    page:   Number, 
    word:   String, 
    image:  String, 
    audio:  String, 
    audioMeaning:  String, 
    audioExample:  String, 
    textMeaning:   String, 
    textExample:   String,     
    transcription: String,  
    wordTranslate: String,
    textMeaningTranslate: String,
    textExampleTranslate: String
  }
  
  
let knwords:word[]=[];
know.innerHTML='';

if (sessionStorage.getItem('spknown')!==null) knwords=JSON.parse(sessionStorage.getItem('spknown') as string);

knwords.forEach((a)=> 
    know.innerHTML=know.innerHTML+spis(a)
)

let notkwords:word[]=[];
notknow.innerHTML='';
if (sessionStorage.getItem('spnotknown')!==null) notkwords=JSON.parse(sessionStorage.getItem('spnotknown') as string);

notkwords.forEach((a)=> 
   notknow.innerHTML=notknow.innerHTML+spis(a)
)


function spis(wrd:word){

     return `<li class="words"> <img src="../assets/icons/woman-voice-svgrepo-com.svg" alt="voice" class="voice" audio="${wrd.audio}">  ${wrd.word} - ${wrd.wordTranslate}</li>`
    //return `<li class="words"><img src="${serv}/${wrd.image}" alt="voice" class="voice" audio="${wrd.audio}">${wrd.word} - ${wrd.wordTranslate}</li>`

}

document.getElementById('spplayagain')!
  .addEventListener("click", ()=>window.location.href =`./challenge-main.html` )  

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
    
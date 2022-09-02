import startTimer from './timer'
import './css/sprint-play.css'

const url =new URL(window.location.href)

//const page = 5
let level = 0
const serv=process.env.SERVER

if (url.searchParams.get('level')) level=Number(url.searchParams.get('level'))
console.log('sprint PLAY level ',level)

let points=0

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

let wrongW:word[]=[];
let rightW:word[]=[];
let otv=0;
let weight=10;

let words:word[]=[];

const ideng= document.getElementById("spengword") as HTMLInputElement;
const idrus= document.getElementById("sprusword") as HTMLInputElement;
const idpoint= document.getElementById("sppoint") as HTMLInputElement;
const idweight= document.getElementById("spweight") as HTMLInputElement;

async function getWords(lvl:number){
 
    const  res= await fetch(`${serv}/words?group=${lvl}`, {
       method: 'GET',
    })
     
    if (res.ok) {
        const data = await res.json() as word[];
        words= words.concat(data.slice(0));
        game() 
    } else   console.log('ERROR ',res);

  }
 
//for (let i=page; i>=0; i-- ){

   getWords(level)  
//}

startTimer()

let w1=0;
let w2=0;

async function game()
{

weight= 10*(Math.pow(2,Math.trunc(otv/4)));
idpoint.innerText=`Points ${points}`
idweight.innerText=`Weight ${weight}`
w1=Math.trunc(Math.random()*words.length);
if (Math.random()<0.5) {w2=w1} else w2=Math.trunc(Math.random()*words.length);
ideng.innerText =  words[w1].word as string;
idrus.innerText =  words[w2].wordTranslate as string;
}

const wr = (w:word)=>
{
    otv=0;
    wrongW.push(w);
}
const rt = (w:word)=>
{   otv +=1;
    points+=weight; 
    rightW.push(w);
}

const right = document.getElementById('spright') as HTMLInputElement;
right.addEventListener("click", ()=>{
    if (w1!=w2) wr(words[w1]);
    if (w1==w2) rt(words[w1])
    game()
}, false);

const wrong = document.getElementById('spwrong') as HTMLInputElement;
wrong.addEventListener("click", ()=>{
    if ( w1==w2) wr(words[w1])
    if (w1!=w2) rt(words[w1])
    game()
    }, false);

document.addEventListener("stoptimer", ()=>{
    console.log('END ');
    sessionStorage.setItem('spknown', JSON.stringify(rightW));
    sessionStorage.setItem('spnotknown', JSON.stringify(wrongW));
    window.location.href =`./sprint-final.html`
    })

let elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
}

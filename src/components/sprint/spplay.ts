import startTimer from './timer'
import './css/sprint-play.css'

const url =new URL(window.location.href)

const MAX_PAGE = 100
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

async function getWords(lvl:number,pag:number){
 
    const  res= await fetch(`${serv}/words?group=${lvl}&page=${pag}`, {
       method: 'GET',
    })
     
    if (res.ok) {
        
        const data = await res.json() as word[];
        words= words.concat(data.slice(0));
        if (pag==2) {startTimer(); game() }
        
    } else   console.log('ERROR ',res);

  }
 
for (let i=0; i<=MAX_PAGE; i++ ){
   getWords(level,i)    
}



let w1=0;
let w2=0;

function game(){
    setSeries(Math.trunc(otv))
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
/*
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
*/

function setSeries(nom:number){
  (document.getElementById("circle1") as HTMLInputElement).style.backgroundColor="rgb(241, 239, 239)";
  (document.getElementById("circle2") as HTMLInputElement).style.backgroundColor="rgb(241, 239, 239)";
  (document.getElementById("circle3") as HTMLInputElement).style.backgroundColor="rgb(241, 239, 239)";

  if (nom>0)  (document.getElementById("circle1") as HTMLInputElement).style.backgroundColor= "rgb(219, 176, 245)" ;
  if (nom>1)  (document.getElementById("circle2") as HTMLInputElement).style.backgroundColor= "rgb(219, 176, 245)" ;
  if (nom>2)  (document.getElementById("circle3") as HTMLInputElement).style.backgroundColor= "rgb(219, 176, 245)" ;   

}



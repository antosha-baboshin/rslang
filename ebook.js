(()=>{"use strict";var e,r={1709:(e,r,n)=>{n.d(r,{Z:()=>l});var o=n(8081),t=n.n(o),i=n(3645),d=n.n(i)()(t());d.push([e.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.body-active {\r\n  background-color: rgb(219, 176, 245);\r\n}\r\n\r\n.level-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.level {\r\n  display: flex;\r\n  width: 120px;\r\n  height: 40px;\r\n  background-color: black;\r\n  border-radius: 10px;\r\n  color: white;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.level:hover {\r\n  color: gold;\r\n}\r\n\r\n.denied-level {\r\n  background-color: rgb(255, 71, 125);\r\n}\r\n\r\n.denied-level:hover {\r\n  color: white;\r\n}\r\n.pagination {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.arrow {\r\n  cursor: pointer;\r\n}\r\n\r\n.level-active {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid black;\r\n}\r\n\r\n.word-block {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: rgb(241, 239, 239);\r\n  max-width: 100%;\r\n  height: 250px;\r\n  margin-top: 30px;\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.word-image {\r\n  border-radius: 20px;\r\n  width: 300px;\r\n  height: 200px;\r\n}\r\n\r\n.word-text-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 15px;\r\n  gap: 30px;\r\n  width: 30%;\r\n}\r\n\r\n.word-transcription-block {\r\n  display: flex;\r\n  gap: 40px;\r\n  align-items: center;\r\n}\r\n\r\n.word {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.word-block-meanings {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.word-meaning {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.learning-buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  gap: 20px;\r\n}\r\n\r\n.learning-button {\r\n  display: flex;\r\n  width: 120px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  color: black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.learning-button:hover {\r\n  color: gold;\r\n}\r\n.difficult-active {\r\n  background-color: rgb(255, 71, 125);\r\n}\r\n\r\n.learned-active {\r\n  background-color: rgb(219, 176, 245);\r\n}\r\n\r\n/* Ebook */\r\n.main-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n  width: 800px;\r\n}\r\n\r\n.ebook-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 165%;\r\n}\r\n\r\n.main-ebook-header {\r\n  display: flex;\r\n}\r\n\r\n.audio::-webkit-media-controls-panel {\r\n  background-color: white;\r\n}\r\n.audio::-webkit-media-controls-play-button {\r\n  background-color: gold;\r\n  border-radius: 20px;\r\n}\r\n\r\n.progress-wrapper {\r\n  text-align: center;\r\n  line-height: 20px;\r\n  color: gray;\r\n}\r\n\r\n.header_container_ebook {\r\n  display: flex;\r\n  width: 620px;\r\n  height: 160px;\r\n  background-color: rgb(241, 239, 239);\r\n  margin-top: 34px;\r\n  border-radius: 20px;\r\n  flex-direction: row;\r\n}\r\n\r\n.footer-ebook {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: auto;\r\n    position: absolute;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n}\r\n\r\n.main-ebook {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  justify-self: center;\r\n  flex-wrap: wrap;\r\n  width: 1200px;\r\n  margin-bottom: 150px;\r\n}\r\n\r\n.body-ebook {\r\n  font-family: 'Sofia', sans-serif;\r\n  color: #000;\r\n  font-size: 15px;\r\n  line-height: 1;\r\n  display: flex;\r\n  column-gap: 37px;\r\n  font-weight: 400;\r\n  height: auto;\r\n  position: relative;\r\n}",""]);const l=d},7294:(e,r,n)=>{n.r(r),n.d(r,{default:()=>y});var o=n(3379),t=n.n(o),i=n(7795),d=n.n(i),l=n(569),a=n.n(l),c=n(3565),s=n.n(c),u=n(9216),p=n.n(u),f=n(4589),g=n.n(f),v=n(1709),h={};h.styleTagTransform=g(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=p(),t()(v.Z,h);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},6731:function(e,r){var n=this&&this.__awaiter||function(e,r,n,o){return new(n||(n=Promise))((function(t,i){function d(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(d,l)}a((o=o.apply(e,r||[])).next())}))};Object.defineProperty(r,"__esModule",{value:!0}),r.getWordByID=r.getAudioUrls=r.getWords=r.WORDS=r.BASE=void 0,r.BASE="https://sveta077-rslang.herokuapp.com",r.WORDS=`${r.BASE}/words`,r.getWords=(e,o)=>n(void 0,void 0,void 0,(function*(){const n=yield fetch(`${r.WORDS}?group=${e}&page=${o}`);if(n.ok)return yield n.json();console.log("error",n.status)})),r.getAudioUrls=e=>n(void 0,void 0,void 0,(function*(){const n=yield fetch(`${r.WORDS}/${e}`);if(n.ok){const e=yield n.json();return[e.audio,e.audioMeaning,e.audioExample]}console.log("error",n.status)})),r.getWordByID=e=>n(void 0,void 0,void 0,(function*(){const n=yield fetch(`${r.WORDS}/${e}`);if(n.ok)return yield n.json();console.log("error",n.status)}))},6292:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.addAudioplayers=void 0;const o=n(6731);r.addAudioplayers=()=>{document.querySelectorAll(".audio").forEach((e=>{(0,o.getAudioUrls)(e.id.slice(6)).then((r=>{let n=0;e.src=o.BASE+"/"+r[0],e.onended=()=>{if(n++,n>=r.length)return n=0,e.src=o.BASE+"/"+r[0],0;e.src=o.BASE+"/"+r[n],e.play()}}))}))}},1250:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.addPagination=void 0;const o=n(2773),t=n(7024);r.addPagination=()=>{const e=document.querySelector(".previous"),r=document.querySelector(".next");o.CURRENT_PAGE.innerHTML=+localStorage.page+1+"",null==e||e.addEventListener("click",(()=>{if("1"!==(null===o.CURRENT_PAGE||void 0===o.CURRENT_PAGE?void 0:o.CURRENT_PAGE.innerHTML)){const e=+(null===o.CURRENT_PAGE||void 0===o.CURRENT_PAGE?void 0:o.CURRENT_PAGE.innerHTML)-1;localStorage.page=e-1,o.CURRENT_PAGE.innerHTML=+localStorage.page+1+"",(0,t.renderWordsList)(localStorage.level,localStorage.page)}})),null==r||r.addEventListener("click",(()=>{if("30"!==(null===o.CURRENT_PAGE||void 0===o.CURRENT_PAGE?void 0:o.CURRENT_PAGE.innerHTML)){const e=+(null===o.CURRENT_PAGE||void 0===o.CURRENT_PAGE?void 0:o.CURRENT_PAGE.innerHTML)-1;localStorage.page=e+1,o.CURRENT_PAGE.innerHTML=+localStorage.page+1+"",(0,t.renderWordsList)(localStorage.level,localStorage.page)}}))}},3622:function(e,r,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.addWords=r.addEasyWords=r.addLearnedWords=void 0;const t=o(n(871)),i=n(7437),d=n(4442),l=n(7024),a=new t.default;a.loadUser(),r.addLearnedWords=e=>{document.querySelectorAll(".learned-button").forEach((r=>{r.addEventListener("click",(()=>{const n=r.id.slice(6);e.includes(n)?(0,i.updateUserWord)({userId:a.id,wordId:n,word:{difficulty:"learned",optional:{target:0,progress:100}}}).then((()=>{"t"===localStorage.level?(0,d.renderDifficultWords)():(0,l.renderWordsList)(localStorage.level,localStorage.page)})):(0,i.createUserWord)({userId:a.id,wordId:n,word:{difficulty:"learned",optional:{target:0,progress:100}}}).then((()=>{"t"===localStorage.level?(0,d.renderDifficultWords)():(0,l.renderWordsList)(localStorage.level,localStorage.page)}))}))}))},r.addEasyWords=()=>{document.querySelectorAll(".easy-button").forEach((e=>{e.addEventListener("click",(()=>{console.log("click easy");const r=e.id.slice(5);console.log(!0),(0,i.updateUserWord)({userId:a.id,wordId:r,word:{difficulty:"easy",optional:{target:3,progress:0}}}).then((()=>{(0,d.renderDifficultWords)()}))}))}))},r.addWords=()=>{(0,i.getUserWords)(a.id).then((e=>{const n=e.map((e=>e.wordId)).filter((e=>void 0!==e));var o;o=n,document.querySelectorAll(".difficult-button").forEach((e=>{e.addEventListener("click",(()=>{const r=e.id.slice(5);o.includes(r)?(0,i.updateUserWord)({userId:a.id,wordId:r,word:{difficulty:"difficult",optional:{target:5,progress:0}}}):(0,i.createUserWord)({userId:a.id,wordId:r,word:{difficulty:"difficult",optional:{target:5,progress:0}}}),(0,l.renderWordsList)(localStorage.level,localStorage.page)}))})),(0,r.addEasyWords)(),(0,r.addLearnedWords)(n)}))}},8301:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.addWordsList=void 0;const o=n(9177),t=n(2773),i=n(4442),d=n(7024);r.addWordsList=()=>{document.querySelectorAll(".level").forEach((e=>{e.addEventListener("click",(()=>{const r=e.id.slice(-1);if("t"===r&&!localStorage.autority)return 0;localStorage.level=r,localStorage.page=0,"difficult"!==e.id?(t.CURRENT_PAGE.innerHTML="1",(0,d.renderWordsList)(+r,0)):(0,i.renderDifficultWords)(),(0,o.checkActiveLevel)()}))})),"t"===localStorage.level?(0,i.renderDifficultWords)():(0,d.renderWordsList)(localStorage.level,localStorage.page)}},9177:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.checkActiveLevel=void 0,r.checkActiveLevel=()=>{const e=document.querySelectorAll(".level"),r=document.getElementById("difficult");e.forEach((e=>{e.classList.remove("level-active"),e.id.slice(-1)===localStorage.level&&e.classList.add("level-active")})),localStorage.autority?r.classList.remove("denied-level"):r.classList.add("denied-level")}},1610:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.checkPage=void 0,r.checkPage=()=>{const e=document.querySelectorAll(".learned-active"),r=document.querySelectorAll(".difficult-active"),n=e.length+r.length,o=document.querySelector(".body-ebook");20===n?o.classList.add("body-active"):o.classList.remove("body-active")}},5266:function(e,r,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkProgress=void 0;const t=o(n(871)),i=n(7437),d=n(1610),l=new t.default;l.loadUser(),r.checkProgress=()=>{const e=document.querySelectorAll(".word-progress");(0,i.getUserWords)(l.id).then((r=>{const n=r.map((e=>e.wordId)).filter((e=>void 0!==e));e.forEach((e=>{const o=e.id.slice(9);if(n.includes(o)){const n=r.find((e=>e.wordId===o));e.innerHTML=Math.round(n.optional.progress)+"%"}else e.innerHTML="0%"}))})).then((()=>{(0,d.checkPage)()}))}},3299:function(e,r,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkActiveLearnedWords=r.checkActiveDifficultWords=void 0;const t=o(n(871)),i=n(7437),d=new t.default;d.loadUser(),r.checkActiveDifficultWords=()=>{const e=document.querySelectorAll(".difficult-button");(0,i.getUserWords)(d.id).then((r=>{const n=r.map((e=>{if("difficult"===e.difficulty)return e.wordId}));e.forEach((e=>{n.includes(e.id.slice(5))&&e.classList.add("difficult-active")}))}))},r.checkActiveLearnedWords=()=>{const e=document.querySelectorAll(".learned-button");(0,i.getUserWords)(d.id).then((r=>{const n=r.map((e=>{if("learned"===e.difficulty)return e.wordId}));e.forEach((e=>{n.includes(e.id.slice(6))&&e.classList.add("learned-active")}))}))}},2773:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.addEbook=r.CURRENT_PAGE=void 0,n(7294),n(2913);const o=n(9177),t=n(4335),i=n(8301),d=n(1250);r.CURRENT_PAGE=document.querySelector(".current"),r.addEbook=()=>{(0,t.defaultStorage)(),(0,o.checkActiveLevel)(),(0,i.addWordsList)(),(0,d.addPagination)()},(0,r.addEbook)()},4442:function(e,r,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.renderDifficultWords=void 0;const t=o(n(871)),i=n(7437),d=n(6731),l=n(6292),a=n(3622),c=n(5266),s=n(3954),u=new t.default;u.loadUser(),r.renderDifficultWords=()=>{const e=document.querySelector(".words-list-wrapper");e.innerHTML="",(0,i.getUserWords)(u.id).then((r=>{const n=r.map((e=>{if("difficult"===e.difficulty)return e.wordId})).filter((e=>void 0!==e));console.log("render",n),n.forEach((r=>{(0,d.getWordByID)(r).then((r=>{e.innerHTML+=`\n        <div class="word-block">\n        <img src=${d.BASE+"/"+r.image} alt='' class='word-image'>\n        <div class='word-text-block'>\n          <div class='word-transcription-block'>\n            <p class='word'>${r.word}</p>\n            <p class='word'>${r.transcription}</p>\n            <p class='word'>${r.wordTranslate}</p>\n          </div>\n          <div class="word-block-meanings">\n            <div class='word-meaning'> \n              <p>${r.textMeaning}</p>\n              <p>(<i>${r.textMeaningTranslate}</i>)</p>\n            </div>\n            <div class='word-meaning'> \n              <p>${r.textExample}</p>\n              <p>(<i>${r.textExampleTranslate}</i>)</p>\n            </div>\n          </div>\n        </div>\n        <audio controls class='audio' id='audio-${r.id}'></audio>\n        <div class="learning-buttons">${(0,s.renderLearningsButtons)(r.id)}</div>\n      </div>`})).then((()=>{(0,l.addAudioplayers)(),(0,c.checkProgress)()}))}))})).then((()=>{(0,a.addWords)()}))}},3954:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.renderLearningsButtons=void 0,r.renderLearningsButtons=e=>localStorage.autority?"t"===localStorage.level?`<div class="learning-button easy-button" id='easy-${e}'>Delete</div>\n                                              <div class="learning-button learned-button" id='learn-${e}'>Learned</div>\n                                              <div class="progress-wrapper">Word progress: <div class='word-progress' id='progress-${e}'></div></div>`:`<div class="learning-button difficult-button" id='diff-${e}'>Difficult</div>\n          <div class="learning-button learned-button" id='learn-${e}'>Learned</div>\n          <div class="progress-wrapper">Word progress: <div class='word-progress' id='progress-${e}'></div></div>`:""},7024:function(e,r,n){var o=this&&this.__awaiter||function(e,r,n,o){return new(n||(n=Promise))((function(t,i){function d(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(d,l)}a((o=o.apply(e,r||[])).next())}))};Object.defineProperty(r,"__esModule",{value:!0}),r.renderWordsList=void 0;const t=n(6731),i=n(6292),d=n(3622),l=n(1610),a=n(5266),c=n(3299),s=n(3954);r.renderWordsList=(e,r)=>o(void 0,void 0,void 0,(function*(){const n=document.querySelector(".words-list-wrapper"),o=`\n    ${(yield(0,t.getWords)(e,r)).map((e=>`\n    <div class="word-block">\n      <img src=${t.BASE+"/"+e.image} alt='' class='word-image'>\n      <div class='word-text-block'>\n        <div class='word-transcription-block'>\n          <p class='word'>${e.word}</p>\n          <p class='word'>${e.transcription}</p>\n          <p class='word'>${e.wordTranslate}</p>\n        </div>\n        <div class="word-block-meanings">\n          <div class='word-meaning'> \n            <p>${e.textMeaning}</p>\n            <p>(<i>${e.textMeaningTranslate}</i>)</p>\n          </div>\n          <div class='word-meaning'>\n            <p>${e.textExample}</p>\n            <p>(<i>${e.textExampleTranslate}</i>)</p>\n          </div>\n        </div>\n      </div>\n      <audio controls class='audio' id='audio-${e.id}'></audio>\n      <div class="learning-buttons">${(0,s.renderLearningsButtons)(e.id)}</div>\n    </div>`)).join("")}\n  `;n.innerHTML=o,(0,i.addAudioplayers)(),localStorage.autority&&((0,d.addWords)(),(0,c.checkActiveDifficultWords)(),(0,c.checkActiveLearnedWords)(),(0,l.checkPage)(),(0,a.checkProgress)())}))},4335:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.defaultStorage=void 0,r.defaultStorage=()=>{localStorage.level=localStorage.level?localStorage.getItem("level"):"0",localStorage.page=localStorage.page?localStorage.getItem("page"):"0"}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return r[e].call(i.exports,i,i.exports,o),i.exports}o.m=r,e=[],o.O=(r,n,t,i)=>{if(!n){var d=1/0;for(s=0;s<e.length;s++){for(var[n,t,i]=e[s],l=!0,a=0;a<n.length;a++)(!1&i||d>=i)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(l=!1,i<d&&(d=i));if(l){e.splice(s--,1);var c=t();void 0!==c&&(r=c)}}return r}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,t,i]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={352:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var t,i,[d,l,a]=n,c=0;if(d.some((r=>0!==e[r]))){for(t in l)o.o(l,t)&&(o.m[t]=l[t]);if(a)var s=a(o)}for(r&&r(n);c<d.length;c++)i=d[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},n=self.webpackChunkrslang=self.webpackChunkrslang||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),o.nc=void 0;var t=o.O(void 0,[13,871,913,437],(()=>o(2773)));t=o.O(t)})();
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE = 'https://react-learnwords-example.herokuapp.com';
const WORDS = `${BASE}/words`;
const getWords = (group, page) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(`${WORDS}?group=${group}&page=${page}`);
    if (response.ok) {
        return yield response.json();
        ;
    }
    else {
        console.log('error', response.status);
    }
});
const renderWordsList = (group, page) => __awaiter(void 0, void 0, void 0, function* () {
    const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper');
    let data = yield getWords(group, page);
    const WORDS_TABLE = `
    ${data.map((obj) => `
    <div class="word-block">
      <img src=${BASE + '/' + obj.image} alt=''>
      <p>${obj.word}</p>
      <p>${obj.transcription}</p>
      <p>${obj.wordTranslate}</p>
      <div class="word-block-meanings">
        <p>${obj.textMeaning}</p>
        <p>(<i>${obj.textMeaningTranslate}</i>)</p>
        <p>${obj.textExample}</p>
        <p>(<i>${obj.textExampleTranslate}</i>)</p>
      </div>
      <audio controls class='audio' id=${obj.id}></audio>
    </div>`).join('')}
  `;
    WORDS_LIST_WRAPPER.innerHTML = WORDS_TABLE;
    createAudioplayers();
});
const createAudioplayers = () => {
    const AUDIOPLAYERS = document.querySelectorAll('.audio');
    AUDIOPLAYERS.forEach((el) => {
        getAudioUrls(el.id).then((arr) => {
            let current = 0;
            el.src = `${BASE + '/' + arr[0]}`;
            el.onended = () => {
                current++;
                if (current >= arr.length) {
                    current = 0;
                    el.src = `${BASE + '/' + arr[0]}`;
                    return 0;
                }
                el.src = `${BASE + '/' + arr[current]}`;
                el.play();
            };
        });
    });
};
const getAudioUrls = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(`${WORDS}/${id}`);
    if (response.ok) {
        let word = yield response.json();
        return [word.audio, word.audioMeaning, word.audioExample];
    }
    else {
        console.log('error', response.status);
    }
});
renderWordsList(2, 2);
//# sourceMappingURL=words-list.js.map
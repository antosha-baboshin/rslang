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
// let promise: Promise<void> = fetch(WORDS)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const getWords = (group, page) => __awaiter(this, void 0, void 0, function* () {
    let response = yield fetch(`${WORDS}?group=${group}&page=${page}`);
    if (response.ok) {
        return yield response.json();
        ;
    }
    else {
        console.log('error', response.status);
    }
});
const renderWordsList = (group, page) => __awaiter(this, void 0, void 0, function* () {
    const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper');
    let data = yield getWords(group, page);
    const WORDS_TABLE = `
    ${data.map((obj) => `
    <div class="word-block">
      <img src=${BASE + '/' + obj.image} alt=''>
      <p>${obj.word}</p>
      <p>${obj.transcription}</p>
      <div class="word-block-meanings">
        <p>${obj.textMeaning}</p>
        <p>(<i>${obj.textMeaningTranslate}</i>)</p>
        <p>${obj.textExample}</p>
        <p>(<i>${obj.textExampleTranslate}</i>)</p>
      </div>
    </div>`).join('')}
  `;
    console.log(BASE + data[0].image);
    WORDS_LIST_WRAPPER.innerHTML = WORDS_TABLE;
});
renderWordsList(1, 1);

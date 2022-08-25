const BASE: string = 'https://react-learnwords-example.herokuapp.com';

const WORDS: string = `${BASE}/words`;

// let promise: Promise<void> = fetch(WORDS)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const getWords = async (group: number, page: number) => {
  let response = await fetch(`${WORDS}?group=${group}&page=${page}`);
  if (response.ok) {
    return await response.json();;
  } else {
    console.log('error', response.status);
  }
}

const renderWordsList = async (group: number, page: number) => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  let data = await getWords(group, page);

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
}

renderWordsList(1, 1);
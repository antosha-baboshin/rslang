export const BASE: string = 'https://sveta077-rslang.herokuapp.com';
export const WORDS: string = `${BASE}/words`;
const getWords = async (group: number, page: number) => {
  let response = await fetch(`${WORDS}?group=${group}&page=${page}`);
  if (response.ok) {
    return await response.json();;
  } else {
    console.log('error', response.status);
  }
}

export const renderWordsList = async (group: number, page: number): Promise<void> => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  let data = await getWords(group, page);

  const WORDS_TABLE = `
    ${data.map((obj: any) => `
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
      <audio controls class='audio' id='audio-${obj.id}'></audio>
      <div class="learning-buttons">${renderLearningsButtons(obj.id)}</div>
    </div>`).join('')}
  `;
  WORDS_LIST_WRAPPER.innerHTML = WORDS_TABLE;

  createAudioplayers();
  addDifficultWords();
}

export const createAudioplayers = () => {
  const AUDIOPLAYERS = document.querySelectorAll('.audio') as NodeListOf<HTMLAudioElement>;
  AUDIOPLAYERS.forEach((el) => {
    getAudioUrls(el.id.slice(6)).then((arr) => {
      let current = 0;
      el.src = `${BASE + '/' + arr![0]}`;
      el.onended = () => {
        current++;
        if (current >= arr!.length) {
          current = 0;
          el.src = `${BASE + '/' + arr![0]}`;
          return 0;
        }
        el.src = `${BASE + '/' + arr![current]}`;
        el.play();
      }
    });
  })
}

export const getAudioUrls = async (id: string): Promise<string[] | undefined> => {
  let response = await fetch(`${WORDS}/${id}`);
  if (response.ok) {
    let word = await response.json();
    return [word.audio, word.audioMeaning, word.audioExample];
  } else {
    console.log('error', response.status);
  }
};

export const renderLearningsButtons = (id: string) => {
  const LEARNING_BUTTONS_WRAPPER = document.querySelector('.learning-buttons');
  if (!localStorage.autority) return '';
  return `<div class="learning-button difficult-button" id='diff-${id}'>Difficult</div>
          <div class="learning-button" id='learn-${id}'>Learned</div>`
}

const addDifficultWords = () => {
  const DIFFICULT_BUTTON = document.querySelectorAll('.difficult-button');

  DIFFICULT_BUTTON.forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.add('difficult-active');
      let current_difficults = JSON.parse(localStorage.difficult);
      if (!current_difficults.includes(el.id.slice(5))) {
        current_difficults.push(el.id.slice(5));
      }
      localStorage.difficult = JSON.stringify(current_difficults);
    });
  })
}
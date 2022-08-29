import { BASE, createAudioplayers, renderLearningsButtons, renderWordsList, WORDS } from "../words-list/words-list";

const CURRENT_PAGE = document.querySelector('.current') as HTMLElement;

export const addWordsList = () => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level');
  LEVEL_BUTTONS.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.id !== 'difficult') {
        let level = +el.id.slice(-1);
        CURRENT_PAGE.innerHTML = '1';
      
        localStorage.level = level;
        localStorage.page = 0;
  
        renderWordsList(level, 0);
      } else {
        renderDifficultWords();
      }
    });
  })
  renderWordsList(localStorage.level, localStorage.page);
}

export const addPagination = () => {
  const PREVIOUS_PAGE_BUTTON = document.querySelector('.previous');
  const NEXT_PAGE_BUTTON = document.querySelector('.next');
  CURRENT_PAGE.innerHTML = (+localStorage.page + 1) + '';

  PREVIOUS_PAGE_BUTTON?.addEventListener('click', () => {
    let page: number = +(CURRENT_PAGE?.innerHTML!) - 1;
    localStorage.page = page - 1;
    CURRENT_PAGE.innerHTML = (+localStorage.page + 1) + '';
    renderWordsList(localStorage.level, localStorage.page);
  });

  NEXT_PAGE_BUTTON?.addEventListener('click', () => {
    let page: number = +(CURRENT_PAGE?.innerHTML!) - 1;
    localStorage.page = page + 1;
    CURRENT_PAGE.innerHTML = (+localStorage.page + 1) + '';
    renderWordsList(localStorage.level, localStorage.page);
  });
}

const renderDifficultWords = () => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  WORDS_LIST_WRAPPER.innerHTML = '';
  JSON.parse(localStorage.difficult).forEach((id: string) => {
    getWordByID(id).then((obj) => {
      WORDS_LIST_WRAPPER.innerHTML += `<div class="word-block">
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
    </div>`
    }).then( () => {
      createAudioplayers();
    });
  })
}

const getWordByID = async (id: string) => {
  let response = await fetch(`${WORDS}/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    console.log('error', response.status);
  }
}
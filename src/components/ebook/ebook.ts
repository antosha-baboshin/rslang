import { addLearnedWords, BASE, createAudioplayers, renderLearningsButtons, renderWordsList, WORDS } from "../words-list/words-list";

const CURRENT_PAGE = document.querySelector('.current') as HTMLElement;

export const addWordsList = () => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level');
  LEVEL_BUTTONS.forEach((el) => {
    el.addEventListener('click', () => {
      let level = el.id.slice(-1);
      localStorage.level = level;
      localStorage.page = 0;
      if (el.id !== 'difficult') {
        CURRENT_PAGE.innerHTML = '1';
        renderWordsList(+level, 0);
      } else {
        renderDifficultWords();
      }
      checkActiveLevel();
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

export const checkActiveLevel = () => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level');
  LEVEL_BUTTONS.forEach((el) => {
    el.classList.remove('level-active');
    if (el.id.slice(-1) === localStorage.level) {
      el.classList.add('level-active');
    }
  })
}

export const checkActiveDifficultWords = () => {
  const DIFFICULT_BUTTONS = document.querySelectorAll('.difficult-button'); 
  DIFFICULT_BUTTONS.forEach((el) => {
    if (JSON.parse(localStorage.difficult).includes(el.id.slice(5))) {
      el.classList.add('difficult-active');
    }
  })
}

export const checkActiveLearnedWords = () => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-button'); 
  LEARNED_BUTTONS.forEach((el) => {
    if (JSON.parse(localStorage.learned).includes(el.id.slice(6))) {
      el.classList.add('learned-active');
    }
  })
}
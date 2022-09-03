import { renderDifficultWords } from "../renders/renderDifficultWords";
import { renderWordsList } from "../renders/renderWordsList";

const addDifficultWords = (): void => {
  const DIFFICULT_BUTTONS = document.querySelectorAll('.difficult-button') as NodeListOf<HTMLElement>;

  DIFFICULT_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', (): void => {
      const CURRENT_DIFFICULTS: string[] = JSON.parse(localStorage.difficult);
      const CURRENT_LEARNED: string[] = JSON.parse(localStorage.learned);
      const ID: string = el.id.slice(5);
      const LEARNED_WORD_INDEX: number = CURRENT_LEARNED.indexOf(ID);
      const DIFFICULT_WORD_INDEX: number = CURRENT_DIFFICULTS.indexOf(ID);

      if (!CURRENT_DIFFICULTS.includes(ID)) {
        CURRENT_DIFFICULTS.push(ID);
        if (CURRENT_LEARNED.includes(ID)) {
          CURRENT_LEARNED.splice(LEARNED_WORD_INDEX, 1);
        }
      } else {
        CURRENT_DIFFICULTS.splice(DIFFICULT_WORD_INDEX, 1);
      }

      localStorage.difficult = JSON.stringify(CURRENT_DIFFICULTS);
      localStorage.learned = JSON.stringify(CURRENT_LEARNED);
      renderWordsList(localStorage.level, localStorage.page);
    });
  })
}

export const addLearnedWords = (): void => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-button') as NodeListOf<HTMLElement>;

  LEARNED_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', () => {
      const CURRENT_LEARNED = JSON.parse(localStorage.learned);
      const CURRENT_DIFFICULTS = JSON.parse(localStorage.difficult);
      const ID = el.id.slice(6);
      const LEARNED_WORD_INDEX = CURRENT_LEARNED.indexOf(ID);
      const DIFFICULT_WORD_INDEX = CURRENT_DIFFICULTS.indexOf(ID);

      if (!CURRENT_LEARNED.includes(ID)) {
        CURRENT_LEARNED.push(ID);
        if (CURRENT_DIFFICULTS.includes(ID)) {
          CURRENT_DIFFICULTS.splice(DIFFICULT_WORD_INDEX, 1);
        }
      } else {
        CURRENT_LEARNED.splice(LEARNED_WORD_INDEX, 1);
      }
      localStorage.learned = JSON.stringify(CURRENT_LEARNED);
      localStorage.difficult = JSON.stringify(CURRENT_DIFFICULTS);
      
      if (localStorage.level === 't') {
        renderDifficultWords();
      } else {
        renderWordsList(localStorage.level, localStorage.page);
      }
    });
  })
}

export const addEasyWords = (): void => {
  const EASY_BUTTONS = document.querySelectorAll('.easy-button') as NodeListOf<HTMLElement>;
  EASY_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', () => {
      const CURRENT_DIFFICULTS = JSON.parse(localStorage.difficult);
      const ID = el.id.slice(5);
      const DIFFICULT_WORD_INDEX = CURRENT_DIFFICULTS.indexOf(ID);
      console.log(ID);
      if (CURRENT_DIFFICULTS.includes(ID)) {
        CURRENT_DIFFICULTS.splice(DIFFICULT_WORD_INDEX, 1);
      } 
      localStorage.difficult = JSON.stringify(CURRENT_DIFFICULTS);
      renderDifficultWords();
    });
  })
};

export const addWords = () => {
  addDifficultWords();
  addLearnedWords();
  addEasyWords();
}

export const getUsers = async () => {
  const response: Response = await fetch(`${process.env.SERVER}/users/`);
  if (response.ok) {
    return await response.json();
  } else {
    console.log('error', response.status);
  }
}
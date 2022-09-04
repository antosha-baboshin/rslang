import Aut from "../../../api/aut";
import { createUserWord, getUserWords, updateUserWord } from "../../../api/usersWords";
import { GetUserWord } from "../../../utilities/interfaces/interfaces";
import { renderDifficultWords } from "../renders/renderDifficultWords";
import { renderWordsList } from "../renders/renderWordsList";

const aut = new Aut();
aut.loadUser()

export const addLearnedWords = (array: string[]): void => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-button') as NodeListOf<HTMLElement>;

  LEARNED_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', () => {
      const ID = el.id.slice(6);
      if (array.includes(ID)) {
        updateUserWord({
          userId: aut.id, 
          wordId: ID, 
          word: {
            difficulty: 'learned',
            optional: {
              target: 0,
              progress: 100,
            }
          }
        });
      } else {
        createUserWord({
          userId: aut.id, 
          wordId: ID, 
          word: {
            difficulty: 'learned',
            optional: {
              target: 0,
              progress: 100,
            }
          }
        });
      }

      if (localStorage.level === 't') {
        renderDifficultWords();
      } else {
        renderWordsList(localStorage.level, localStorage.page);
      }
    });
  })
}

const addDifficultWords = (array: string[]): void => {
  const DIFFICULT_BUTTONS = document.querySelectorAll('.difficult-button') as NodeListOf<HTMLElement>;

  DIFFICULT_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', (): void => {
      const ID: string = el.id.slice(5);
      if (array.includes(ID)) {
        updateUserWord({
          userId: aut.id, 
          wordId: ID, 
          word: {
            difficulty: 'difficult',
            optional: {
              target: 5,
              progress: 0
            }
          }
        });
      } else {
        createUserWord({
          userId: aut.id, 
          wordId: ID, 
          word: {
            difficulty: 'difficult',
            optional: {
              target: 5,
              progress: 0
            }
          }
        });
      }
      renderWordsList(localStorage.level, localStorage.page);
    });
  })
}

export const addEasyWords = (array: string[]): void => {
  const EASY_BUTTONS = document.querySelectorAll('.easy-button') as NodeListOf<HTMLElement>;
  EASY_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', () => {
      const ID = el.id.slice(5);
      if (array.includes(ID)) {
        updateUserWord({ 
          userId: aut.id, 
          wordId: ID, 
          word: {
            difficulty: 'easy',
            optional: {
              target: 3,
              progress: 0
            }
          } 
        })
      } 
      renderDifficultWords();
    });
  })
};

export const addWords = () => {
  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      return el.wordId;
    }).filter((el: string) => el !== undefined);
    addDifficultWords(ARR);
    addLearnedWords(ARR);
    addEasyWords(ARR);
  })
};
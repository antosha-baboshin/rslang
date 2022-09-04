import Aut from "../../api/aut";
import { getUserWords } from "../../api/usersWords";
import { GetUserWord } from "../../../utilities/interfaces/interfaces";

const aut= new Aut()
aut.loadUser()

export const checkActiveDifficultWords = (): void => {
  const DIFFICULT_BUTTONS = document.querySelectorAll('.difficult-button') as NodeListOf<HTMLElement>; 
  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      if (el.difficulty === 'difficult') {
        return el.wordId;
      }
    })

    DIFFICULT_BUTTONS.forEach((el: HTMLElement): void => {
      if (ARR.includes(el.id.slice(5))) {
        el.classList.add('difficult-active');
      }
    })
  })
}

export const checkActiveLearnedWords = (): void => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-button') as NodeListOf<HTMLElement>; 
  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      if (el.difficulty === 'learned') {
        return el.wordId;
      }
    })

    LEARNED_BUTTONS.forEach((el: HTMLElement): void => {
      if (ARR.includes(el.id.slice(6))) {
        el.classList.add('learned-active');
      }
    })
  })
}
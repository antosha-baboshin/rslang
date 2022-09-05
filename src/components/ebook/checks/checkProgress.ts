import Aut from "../../api/aut";
import { getUserWords } from "../../api/usersWords";
import { GetUserWord } from "../utilities/interfaces/interfaces";
import { checkPage } from "./checkPage";

const aut = new Aut();
aut.loadUser()

export const checkProgress = () => {
  const WORD_PROGRESS_VALUES = document.querySelectorAll('.word-progress');

  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      return el.wordId;
    }).filter((el: string) => el !== undefined);

    WORD_PROGRESS_VALUES.forEach((el) => {
      const ID = el.id.slice(9);
      if (ARR.includes(ID)) {
        const CURRENT_WORD = data.find((obj: GetUserWord) => obj.wordId === ID);
        el.innerHTML = Math.round(CURRENT_WORD.optional.progress) + '%';
      } else {
        el.innerHTML = '0%';
      }
    })
  }).then(() => {
    checkPage();
  })
}
import { renderWordsList } from "../words-list/words-list";

export const addWordsList = () => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level');
  LEVEL_BUTTONS.forEach((el) => {
    el.addEventListener('click', () => {
      let level = +el.id.slice(-1);
      renderWordsList(level, 0);
    });
  })
}
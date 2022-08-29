import { renderWordsList } from "../words-list/words-list";

export const addWordsList = () => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level');
  LEVEL_BUTTONS.forEach((el) => {
    el.addEventListener('click', () => {
      let level = +el.id.slice(-1);
      localStorage.level = level;
      renderWordsList(level, 0);
    });
  })
  renderWordsList(localStorage.level, localStorage.page);
}

// export const addPagination = () => {
//   const PREVIOUS_PAGE_BUTTON = document.querySelector('.previous');
//   const NEXT_PAGE_BUTTON = document.querySelector('.next');

//   PREVIOUS_PAGE_BUTTON?.addEventListener('click', () => {
//     renderWordsList(level, 0);
//   })
// }
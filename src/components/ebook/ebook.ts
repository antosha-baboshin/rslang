import { renderWordsList } from "../words-list/words-list";

const CURRENT_PAGE = document.querySelector('.current') as HTMLElement;

export const addWordsList = () => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level');
  LEVEL_BUTTONS.forEach((el) => {
    el.addEventListener('click', () => {
      let level = +el.id.slice(-1);
      CURRENT_PAGE.innerHTML = '1';
    
      localStorage.level = level;
      localStorage.page = 0;

      renderWordsList(level, 0);
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
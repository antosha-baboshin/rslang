import { checkActiveLevel } from "../checks/checkActiveLevel";
import { CURRENT_PAGE } from "../ebook";
import { renderDifficultWords } from "../renders/renderDifficultWords";
import { renderWordsList } from "../renders/renderWordsList";

export const addWordsList = (): void => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level') as NodeListOf<HTMLElement>;
  LEVEL_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', (): void|number => {
      const LEVEL: string = el.id.slice(-1);

      if (LEVEL === 't' && !localStorage.autority) return 0;
    
      localStorage.level = LEVEL;
      localStorage.page = 0;

      if (el.id !== 'difficult') {
        CURRENT_PAGE.innerHTML = '1';
        renderWordsList(+LEVEL, 0);
      } else {
        renderDifficultWords(); 
      }
      checkActiveLevel();
    });
  })

  if (localStorage.level === 't') {
    renderDifficultWords();
  } else {
    renderWordsList(localStorage.level, localStorage.page);
  }
}
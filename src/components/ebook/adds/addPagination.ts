import { CURRENT_PAGE } from "../ebook";
import { renderWordsList } from "../renders/renderWordsList";

export const addPagination = (): void => {
  const PREVIOUS_PAGE_BUTTON = document.querySelector('.previous') as HTMLElement;
  const NEXT_PAGE_BUTTON = document.querySelector('.next') as HTMLElement;
  CURRENT_PAGE.innerHTML = (+localStorage.page + 1) + '';

  PREVIOUS_PAGE_BUTTON?.addEventListener('click', (): void => {
    const PAGE: number = +(CURRENT_PAGE?.innerHTML) - 1;
    localStorage.page = PAGE - 1;
    CURRENT_PAGE.innerHTML = (+localStorage.page + 1) + '';
    renderWordsList(localStorage.level, localStorage.page);
  });

  NEXT_PAGE_BUTTON?.addEventListener('click', () => {
    const PAGE: number = +(CURRENT_PAGE?.innerHTML) - 1;
    localStorage.page = PAGE + 1;
    CURRENT_PAGE.innerHTML = (+localStorage.page + 1) + '';
    renderWordsList(localStorage.level, localStorage.page);
  });
}
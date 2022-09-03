export const checkActiveDifficultWords = (): void => {
  const DIFFICULT_BUTTONS = document.querySelectorAll('.difficult-button') as NodeListOf<HTMLElement>; 
  DIFFICULT_BUTTONS.forEach((el: HTMLElement): void => {
    if (JSON.parse(localStorage.difficult).includes(el.id.slice(5))) {
      el.classList.add('difficult-active');
    }
  })
}

export const checkActiveLearnedWords = (): void => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-button') as NodeListOf<HTMLElement>; 
  LEARNED_BUTTONS.forEach((el: HTMLElement): void => {
    if (JSON.parse(localStorage.learned).includes(el.id.slice(6))) {
      el.classList.add('learned-active');
    }
  })
}
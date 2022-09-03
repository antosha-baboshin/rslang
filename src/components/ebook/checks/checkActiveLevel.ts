export const checkActiveLevel = (): void => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level') as NodeListOf<HTMLElement>;
  const DIFFICULT_LEVEL_BUTTON = document.getElementById('difficult') as HTMLElement;
  LEVEL_BUTTONS.forEach((el: HTMLElement): void => {
    el.classList.remove('level-active');
    if (el.id.slice(-1) === localStorage.level) {
      el.classList.add('level-active');
    }
  })
  if (!localStorage.autority) {
    DIFFICULT_LEVEL_BUTTON.classList.add('denied-level');
  } else {
    DIFFICULT_LEVEL_BUTTON.classList.remove('denied-level');
  }
}
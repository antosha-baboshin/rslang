export const checkActiveLevel = (): void => {
  const LEVEL_BUTTONS = document.querySelectorAll('.level') as NodeListOf<HTMLElement>;
  LEVEL_BUTTONS.forEach((el: HTMLElement): void => {
    el.classList.remove('level-active');
    if (el.id.slice(-1) === localStorage.level) {
      el.classList.add('level-active');
    }
  })
}
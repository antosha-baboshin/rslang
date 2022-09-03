export const checkPage = (): void => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-active') as NodeListOf<HTMLElement>;
  const DIFFICULT_BUTTONS = document.querySelectorAll('.difficult-active') as NodeListOf<HTMLElement>; 
  const ACTIVE_BUTTONS: number = LEARNED_BUTTONS.length + DIFFICULT_BUTTONS.length;
  const BODY = document.querySelector('.body') as HTMLElement;
  console.log(ACTIVE_BUTTONS);
  if (ACTIVE_BUTTONS === 20) {
    BODY.classList.add('body-active');
  } else {
    BODY.classList.remove('body-active');
  }
}
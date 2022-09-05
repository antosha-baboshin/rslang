/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BASE, getAudioUrls } from "../../api/words";

export const addAudioplayers = (): void => {
  const AUDIOPLAYERS = document.querySelectorAll('.audio') as NodeListOf<HTMLAudioElement>;
  AUDIOPLAYERS.forEach((el: HTMLAudioElement): void => {
    getAudioUrls(el.id.slice(6)).then((arr: string[] | undefined) => {
      let current = 0;
      el.src = `${BASE + '/' + arr![0]}`;
      el.onended = (): void | number => {
        current++;
        if (current >= arr!.length) {
          current = 0;
          el.src = `${BASE + '/' + arr![0]}`;
          return 0;
        }
        el.src = `${BASE + '/' + arr![current]}`;
        el.play();
      }
    });
  })
}
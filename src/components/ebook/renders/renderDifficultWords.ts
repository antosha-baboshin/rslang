/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BASE, getWordByID } from "../../../api/words";
import { Word } from "../../../utilities/interfaces/interfaces";
import { addAudioplayers } from "../adds/addAudioplayers";
import { renderLearningsButtons } from "./renderLearningButtons";

export const renderDifficultWords = () => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  WORDS_LIST_WRAPPER.innerHTML = '';
  JSON.parse(localStorage.difficult).forEach((id: string) => {
    getWordByID(id).then((obj: Word | undefined): void => {
      WORDS_LIST_WRAPPER.innerHTML += `<div class="word-block">
      <img src=${BASE + '/' + obj!.image} alt=''>
      <p>${obj!.word}</p>
      <p>${obj!.transcription}</p>
      <p>${obj!.wordTranslate}</p>
      <div class="word-block-meanings">
        <p>${obj!.textMeaning}</p>
        <p>(<i>${obj!.textMeaningTranslate}</i>)</p>
        <p>${obj!.textExample}</p>
        <p>(<i>${obj!.textExampleTranslate}</i>)</p>
      </div>
      <audio controls class='audio' id='audio-${obj!.id}'></audio>
      <div class="learning-buttons">${renderLearningsButtons(obj!.id)}</div>
    </div>`
    }).then( () => {
      addAudioplayers();
    });
  })
}

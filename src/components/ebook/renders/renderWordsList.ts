import { BASE, getWords } from "../../../api/words";
import { Word } from "../../../utilities/interfaces/interfaces";
import { addAudioplayers } from "../adds/addAudioplayers";
import { addDifficultWords, addLearnedWords } from "../adds/addWords";
import { checkPage } from "../checks/checkPage";
import { checkActiveDifficultWords, checkActiveLearnedWords } from "../checks/checkWords";
import { renderLearningsButtons } from "./renderLearningButtons";

export const renderWordsList = async (group: number, page: number): Promise<void> => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  const data: Word|undefined  = await getWords(group, page);

  const WORDS_TABLE = `
    ${(data as unknown as Word[]).map((obj: Word): string => `
    <div class="word-block">
      <img src=${BASE + '/' + obj.image} alt=''>
      <p>${obj.word}</p>
      <p>${obj.transcription}</p>
      <p>${obj.wordTranslate}</p>
      <div class="word-block-meanings">
        <p>${obj.textMeaning}</p>
        <p>(<i>${obj.textMeaningTranslate}</i>)</p>
        <p>${obj.textExample}</p>
        <p>(<i>${obj.textExampleTranslate}</i>)</p>
      </div>
      <audio controls class='audio' id='audio-${obj.id}'></audio>
      <div class="learning-buttons">${renderLearningsButtons(obj.id)}</div>
    </div>`).join('')}
  `;
  WORDS_LIST_WRAPPER.innerHTML = WORDS_TABLE;
  addAudioplayers();
  addDifficultWords();
  addLearnedWords();
  checkActiveDifficultWords();
  checkActiveLearnedWords();
  checkPage();
}

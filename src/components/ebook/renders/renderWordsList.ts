import { BASE, getWords } from "../../../api/words";
import { Word } from "../../../utilities/interfaces/interfaces";
import { addAudioplayers } from "../adds/addAudioplayers";
import { addWords } from "../adds/addWords";
import { checkPage } from "../checks/checkPage";
import { checkProgress } from "../checks/checkProgress";
import { checkActiveDifficultWords, checkActiveLearnedWords } from "../checks/checkWords";
import { renderLearningsButtons } from "./renderLearningButtons";

export const renderWordsList = async (group: number, page: number): Promise<void> => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  const data: Word|undefined  = await getWords(group, page);
  const WORDS_TABLE = `
    ${(data as unknown as Word[]).map((obj: Word): string => `
    <div class="word-block">
      <img src=${BASE + '/' + obj.image} alt='' class='word-image'>
      <div class='word-text-block'>
        <div class='word-transcription-block'>
          <p class='word'>${obj.word}</p>
          <p class='word'>${obj.transcription}</p>
          <p class='word'>${obj.wordTranslate}</p>
        </div>
        <div class="word-block-meanings">
          <div class='word-meaning'> 
            <p>${obj.textMeaning}</p>
            <p>(<i>${obj.textMeaningTranslate}</i>)</p>
          </div>
          <div class='word-meaning'>
            <p>${obj.textExample}</p>
            <p>(<i>${obj.textExampleTranslate}</i>)</p>
          </div>
        </div>
      </div>
      <audio controls class='audio' id='audio-${obj.id}'></audio>
      <div class="learning-buttons">${renderLearningsButtons(obj.id)}</div>
    </div>`).join('')}
  `;
  WORDS_LIST_WRAPPER.innerHTML = WORDS_TABLE;
  addAudioplayers();
  if (localStorage.autority) {
    addWords();
    checkActiveDifficultWords();
    checkActiveLearnedWords();
    checkPage();
    checkProgress();
  }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Aut from "../../../api/aut";
import { getUserWords } from "../../../api/usersWords";
import { BASE, getWordByID } from "../../../api/words";
import { GetUserWord, Word } from "../../../utilities/interfaces/interfaces";
import { addAudioplayers } from "../adds/addAudioplayers";
import { addWords } from "../adds/addWords";
import { checkProgress } from "../checks/checkProgress";
import { renderLearningsButtons } from "./renderLearningButtons";

const aut = new Aut();
aut.loadUser()

export const renderDifficultWords = () => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  WORDS_LIST_WRAPPER.innerHTML = '';
  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      if (el.difficulty === 'difficult') return el.wordId;
    }).filter((el: string) => el !== undefined);
    console.log(ARR);
    ARR.forEach((id: string) => {
      getWordByID(id).then((obj: Word | undefined): void => {
        WORDS_LIST_WRAPPER.innerHTML += `
        <div class="word-block">
        <img src=${BASE + '/' + obj!.image} alt='' class='word-image'>
        <div class='word-text-block'>
          <div class='word-transcription-block'>
            <p class='word'>${obj!.word}</p>
            <p class='word'>${obj!.transcription}</p>
            <p class='word'>${obj!.wordTranslate}</p>
          </div>
          <div class="word-block-meanings">
            <div class='word-meaning'> 
              <p>${obj!.textMeaning}</p>
              <p>(<i>${obj!.textMeaningTranslate}</i>)</p>
            </div>
            <div class='word-meaning'> 
              <p>${obj!.textExample}</p>
              <p>(<i>${obj!.textExampleTranslate}</i>)</p>
            </div>
          </div>
        </div>
        <audio controls class='audio' id='audio-${obj!.id}'></audio>
        <div class="learning-buttons">${renderLearningsButtons(obj!.id)}</div>
      </div>`
      }).then( () => {
        addAudioplayers();
        addWords();
        checkProgress();
      })
    })
  })
}
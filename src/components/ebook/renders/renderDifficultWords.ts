/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Aut from "../../api/aut";
import { getUserWords, updateUserWord } from "../../api/usersWords";
import { BASE, getWordByID } from "../../api/words";
import { GetUserWord, Word } from "../utilities/interfaces/interfaces";
import { addAudioplayers } from "../adds/addAudioplayers";
import { addEasyWords } from "../adds/addWords";
import { checkProgress } from "../checks/checkProgress";
import { renderLearningsButtons } from "./renderLearningButtons";

const aut = new Aut();
aut.loadUser()

export const renderDifficultWords = () => {
  const WORDS_LIST_WRAPPER = document.querySelector('.words-list-wrapper') as HTMLDivElement;
  WORDS_LIST_WRAPPER.innerHTML = '';

  console.log('render');

  getUserWords(aut.id).then((data) => {

    const ARR = data.map((el: GetUserWord) => {
      if (el.difficulty === 'difficult') return el.wordId;
    }).filter((el: string) => el !== undefined);
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
        checkProgress();
        addEasyWords();
        addLearnedWordsForDiffLEvel();
      })
    })
  })
}

const addLearnedWordsForDiffLEvel = () => {
  const LEARNED_BUTTONS = document.querySelectorAll('.learned-button') as NodeListOf<HTMLElement>;
  LEARNED_BUTTONS.forEach((el: HTMLElement): void => {
    el.addEventListener('click', () => {

      const ID = el.id.slice(6);
        updateUserWord({ 
          userId: aut.id, 
          wordId: ID, 
          word: {
            difficulty: 'learned',
            optional: {
              target: 0,
              progress: 100
            }
          } 
        }).then(() => {
          renderDifficultWords();
        })
    });
  })
}
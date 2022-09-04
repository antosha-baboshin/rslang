import { CreateUsersWord, GetUserWord, Word } from "../utilities/interfaces/interfaces";
import Aut from "./aut";

const aut = new Aut();
aut.loadUser()

export const createUserWord = async ({ userId, wordId, word }: CreateUsersWord ) => {
  await fetch(`${process.env.SERVER}/users/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${aut.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  })
};

export const updateUserWord = async ({ userId, wordId, word }: CreateUsersWord ) => {
  await fetch(`${process.env.SERVER}/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${aut.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  });
};

export const getUserWords = async (userId: string) => {
  const rawResponse = await fetch(`${process.env.SERVER}/users/${userId}/words`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${aut.token}`,
      'Accept': 'application/json',
    },
  });
  const content = await rawResponse.json();
  return content;
}

export const getUserWordByID = async(userId: string, wordId: string) => {
  const rawResponse = await fetch(`${process.env.SERVER}/users/${userId}/words/${wordId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${aut.token}`,
      'Accept': 'application/json',
    },
  });
  const content = await rawResponse.json();
  return content;
}

export const plusWordProgress = (word: Word) => {
  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      return el.wordId;
    }).filter((el: string) => el !== undefined);
    
    if (ARR.includes(word.id)) {
      const CURRENT_WORD = data.find((obj: GetUserWord) => obj.wordId === word.id);
      if ((CURRENT_WORD.optional.progress + 100 / CURRENT_WORD.optional.target) < 100) {
        updateUserWord({ 
          userId: aut.id, 
          wordId: word.id, 
          word: {
            difficulty: CURRENT_WORD.difficulty,
            optional: {
              target: CURRENT_WORD.optional.target,
              progress: CURRENT_WORD.optional.progress + 100 / CURRENT_WORD.optional.target,
            }
          } 
        })
      } else {
        updateUserWord({ 
          userId: aut.id, 
          wordId: word.id, 
          word: {
            difficulty: 'learned',
            optional: {
              target: CURRENT_WORD.optional.target,
              progress: 100,
            }
          } 
        })
      }
    } else {
      createUserWord({
        userId: aut.id, 
        wordId: word.id, 
        word: {
          difficulty: 'easy',
          optional: {
            target: 3,
            progress: 0 + 100 / 3,
          }
        } 
      })
    }
  })
}

export const deleteWordProgress = (word: Word) => {
  getUserWords(aut.id).then((data) => {
    const ARR = data.map((el: GetUserWord) => {
      return el.wordId;
    }).filter((el: string) => el !== undefined);

    if (ARR.includes(word.id)) {
      updateUserWord({ 
        userId: aut.id, 
        wordId: word.id, 
        word: {
          difficulty: 'easy',
          optional: {
            target: 3,
            progress: 0,
          }
        } 
      })
    } else {
      createUserWord({
        userId: aut.id, 
        wordId: word.id, 
        word: {
          difficulty: 'easy',
          optional: {
            target: 3,
            progress: 0,
          }
        } 
      })
    }
  })
}
import { Word } from "../ebook/utilities/interfaces/interfaces";

export const BASE = process.env.SERVER;
export const WORDS = `${BASE}/words`;

export const getWords = async (group: number, page: number): Promise<Word|undefined> => {
  const response: Response = await fetch(`${WORDS}?group=${group}&page=${page}`);
  if (response.ok) {
    return await response.json();
  } else {
    console.log('error', response.status);
  }
}

export const getAudioUrls = async (id: string): Promise<string[] | undefined> => {
  const response: Response = await fetch(`${WORDS}/${id}`);
  if (response.ok) {
    const WORD: Word = await response.json();
    return [WORD.audio, WORD.audioMeaning, WORD.audioExample];
  } else {
    console.log('error', response.status);
  }
};

export const getWordByID = async (id: string): Promise<Word|undefined> => {
  const response: Response = await fetch(`${WORDS}/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    console.log('error', response.status);
  }
}
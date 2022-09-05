export interface Word {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string
}

export interface UsersWord {
  difficulty: string,
  optional: {
    target: number
  }
}

export interface CreateUsersWord {
  userId: string,
  wordId: string,
  word: {
    difficulty: string,
    optional: {
      target: number,
      progress: number
    },
  }
}

export interface GetUserWord {
  difficulty: string,
  id: string,
  optional: {
    target: number,
    progress: number
  }
  wordId: string
}
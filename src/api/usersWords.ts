import { CreateUsersWord } from "../utilities/interfaces/interfaces";
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
import { CreateUsersWord } from "../utilities/interfaces/interfaces";
import Aut from "./aut";

const aut = new Aut();
aut.loadUser()

export const createUserWord = async ({ userId, wordId, word }: CreateUsersWord ) => {
  const rawResponse = await fetch(`${process.env.SERVER}/users/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${aut.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  });
  const content = await rawResponse.json();

  console.log(content);
};
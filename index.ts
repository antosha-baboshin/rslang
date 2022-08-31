import './src/styles.css'
import Aut from "./src/api/aut";
import { addPagination, addWordsList, checkActiveLevel } from "./src/components/ebook/ebook";
import { defaultStorage } from "./src/utilities/defaultStorage";

console.log('1');

const aut = new Aut('https://sveta077-rslang.herokuapp.com');
aut.addListener();
aut.viewUser();

// const addEbook = () => {
//   defaultStorage();
//   checkActiveLevel();
//   addWordsList();
//   addPagination();
// }

// addEbook();
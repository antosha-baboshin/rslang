import './src/styles.css'
import Aut from "./src/api/aut";
import { addPagination, addWordsList, checkActiveLevel } from "./src/components/ebook/ebook";
import { defaultStorage } from "./src/utilities/defaultStorage";

if (document.title === 'E-Book') {
    const addEbook = () => {
    defaultStorage();
    checkActiveLevel();
    addWordsList();
    addPagination();
  }
  addEbook();
}

if (document.title === 'RSLang') {
  const aut = new Aut('https://sveta077-rslang.herokuapp.com');
  aut.addListener();
  aut.viewUser();
}

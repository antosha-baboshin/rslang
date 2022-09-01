import './src/styles.css'
import Aut from "./src/api/aut";
import { addEbook } from "./src/components/ebook/ebook";

if (document.title === 'E-Book') {
  addEbook();
}

if (document.title === 'RSLang') {
  const aut = new Aut('https://sveta077-rslang.herokuapp.com');
  aut.addListener();
  aut.viewUser();
}

import './src/components/ebook/ebook.css'
import Aut from "./src/api/aut";
import { addEbook } from "./src/components/ebook/ebook";
import './src/css/base.css'
import './src/css/main.css'
import './src/css/reset.css'
import './src/css/sidebar.css'
import './src/css/header.css'
import './src/css/authorization.css'


if (document.title === 'E-Book') {
  addEbook();
  console.log('1');
}

if (document.title === 'RSLang') {
  const aut = new Aut('https://sveta077-rslang.herokuapp.com');
  aut.addListener();
  aut.viewUser();
}
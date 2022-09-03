import './components/ebook/ebook.css'
import Aut from "./api/aut";
import { addEbook } from "./components/ebook/ebook";
import './css/base.css'
import './css/main.css'
import './css/reset.css'
import './css/sidebar.css'
import './css/header.css'
import './css/authorization.css'

const aut= new Aut()
aut.loadUser()

if (document.title === 'E-Book') {
  addEbook();
  console.log('1');
}


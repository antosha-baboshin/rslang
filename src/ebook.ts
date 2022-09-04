import './components/ebook/ebook.css'
import Aut from "./components/api/aut";
import { addEbook } from "./components/ebook/ebook";
import './css/base.css'
import './css/main.css'
import './css/reset.css'
import './css/sidebar.css'
import './css/header.css'
import './css/authorization.css'

const aut= new Aut()
aut.loadUser()

addEbook();
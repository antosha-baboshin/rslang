import Aut from "./src/api/aut";
import './src/css/base.css'
import './src/css/main.css'
import './src/css/reset.css'
import './src/css/sidebar.css'
import './src/css/header.css'
import './src/css/authorization.css'
import './src/css/footer.css'


const aut = new Aut('https://sveta077-rslang.herokuapp.com');
aut.addListener();
aut.viewUser();
import './css/sprint-main.css'
import Aut from "../api/aut";
console.log('sprint MAIN')

const aut = new Aut();
aut.loadUser();

console.log('USER: ', aut.name)

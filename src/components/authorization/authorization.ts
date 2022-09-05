import './css/authorization.css'
import '../../css/styles.css';
import Aut from '../api/aut'

console.log('start AUT')
const aut = new Aut();
aut.loadUser();
aut.addListener()
aut.viewUser('../assets/img/dravava.jpg') 



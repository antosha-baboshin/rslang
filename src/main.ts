import { appendFile } from "fs";
import Aut from "./api/aut";
//const Buffer = require('buffer').Buffer ;

//import './style.css';

const aut = new Aut('http://localhost:3000');

aut.addListener()
aut.viewUser();


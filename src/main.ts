import { addPagination, addWordsList, checkActiveLevel } from "./components/ebook/ebook";
import './styles.css'
import { defaultStorage } from "./utilities/defaultStorage";

const addEbook = () => {
  defaultStorage();
  checkActiveLevel();
  addWordsList();
  addPagination();
}

addEbook();
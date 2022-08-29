import { addPagination, addWordsList } from "./components/ebook/ebook";
import './styles.css'
import { defaultStorage } from "./utilities/defaultStorage";

const addEbook = () => {
  defaultStorage();
  addWordsList();
  addPagination();
}

addEbook();
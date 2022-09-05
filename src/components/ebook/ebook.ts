import "./ebook.css";
import "../../css/styles.css"
import { checkActiveLevel } from "./checks/checkActiveLevel";
import { defaultStorage } from "./utilities/settings/defaultStorage";
import { addWordsList } from "./adds/addWordsList";
import { addPagination } from "./adds/addPagination";

export const CURRENT_PAGE = document.querySelector('.current') as HTMLElement;

export const addEbook = (): void => {
  defaultStorage();
  checkActiveLevel();
  addWordsList();
  addPagination();
}

addEbook();

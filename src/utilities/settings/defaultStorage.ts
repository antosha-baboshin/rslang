export const defaultStorage = () => {
  localStorage.level = localStorage.level ? localStorage.getItem('level') : '0';
  localStorage.page = localStorage.page ? localStorage.getItem('page') : '0';
  localStorage.difficult = localStorage.difficult ? localStorage.getItem('difficult') : JSON.stringify([]);
  localStorage.learned = localStorage.learned ? localStorage.getItem('learned') : JSON.stringify([]);
}
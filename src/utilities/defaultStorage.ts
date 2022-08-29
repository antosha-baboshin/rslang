export const defaultStorage = () => {
  localStorage.level = localStorage.level ? localStorage.getItem('level') : '0';
  localStorage.page = localStorage.page ? localStorage.getItem('page') : '0';
  localStorage.autority = 'true';
}
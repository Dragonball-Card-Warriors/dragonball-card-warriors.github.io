import { cardList } from '../data/cards';

export const sortCards = (asc = true): void => {
  const sortValue: string = (document.getElementById('sortByOption') as HTMLInputElement).value;
  [...document.getElementsByClassName('card-item')].sort((a: HTMLElement, b: HTMLElement) => {
    const aVal: string = a.dataset[sortValue].toLowerCase();
    const bVal: string = b.dataset[sortValue].toLowerCase();
    const res = +aVal - +bVal;
    if (isNaN(res)) {
      return asc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    } else {
      return asc ? res : -res;
    }
  }).forEach(el => el.parentNode.appendChild(el));
};

export const loadSortOptions = (): void => {
  const select = document.getElementById('sortByOption');
  Object.keys(cardList[0]).forEach(key => {
    const el = document.createElement('option');
    el.value = key;
    el.innerText = key.split('_').map(upperCaseFirstLetter).join(' ');
    el.selected = key == 'energy_cost';
    select.appendChild(el);
  });
};

const upperCaseFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

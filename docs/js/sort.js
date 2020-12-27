const compare = (el1, el2) => {

}
let sortAsc = true;
const sortCards = () => {
  const cardElements = [...document.getElementsByClassName('card-item')];
  const sortValue = document.getElementById('sortByOption').value;
  cardElements.sort((a, b) => {
    let _a = a.dataset[sortValue].toLowerCase();
    let _b = b.dataset[sortValue].toLowerCase();
    const res = _a - _b;
    if (isNaN(_b)) {
      return sortAsc ? _a.localeCompare(_b) : _b.localeCompare(_a);
    } else {
      return sortAsc ? res : -res;
    }
  }).forEach(el => el.parentNode.appendChild(el));
}

const loadSortOptions = () => {
  const select = document.getElementById('sortByOption');
  Object.keys(cardList[0]).forEach(key => {
    const el = document.createElement('option');
    el.value = key;
    el.innerText = key.split('_').map(upperCaseFirstLetter).join(' ');
    el.selected = key == 'energy_cost';
    select.appendChild(el);
  })
}

const upperCaseFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
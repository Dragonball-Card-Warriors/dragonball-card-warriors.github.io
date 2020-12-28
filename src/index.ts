import { loadCards } from './js/load';
import { loadSortOptions, sortCards } from './js/sort';
import { filterCards } from './js/filter';
import { updateCardInfoModal, toggleDisplay } from './js/display';

const cardContainer = document.getElementById('card-list');

loadCards(cardContainer);
loadSortOptions();
sortCards();

module.exports = {
  sortAsc: true,
  sortCards,
  filterCards,
  toggleDisplay,
  updateCardInfoModal,
};

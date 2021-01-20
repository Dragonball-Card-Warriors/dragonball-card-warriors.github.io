import { loadCards, loadEffectTypes, loadGroups } from './js/load';
import { loadSortOptions, sortCards } from './js/sort';
import { filterCards, toggleAllFilter } from './js/filter';
import { updateCardInfoModal, toggleDisplay } from './js/display';
import { cardList } from './data/cards';

const cardContainer = document.getElementById('card-list');

loadEffectTypes();
loadGroups();
loadCards(cardContainer);
loadSortOptions();
sortCards();

module.exports = {
  sortAsc: true,
  sortCards,
  filterCards,
  toggleDisplay,
  updateCardInfoModal,
  cardList,
  toggleAllFilter,
};

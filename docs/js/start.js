const cardContainer = document.getElementById('card-list');

loadCards(cardContainer);
loadSortOptions();
sortCards();

// Load a card directly
(()=>{
  const queries = new URLSearchParams(location.search);
  const cardID = queries.get('cardID') || queries.get('ID');
  if (cardID) {
    const modal = new bootstrap.Modal(document.getElementById('cardInfoModal'));
    updateCardInfoModal(cardID);
    modal.show();
  }
})();

// Enable tooltips
var tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

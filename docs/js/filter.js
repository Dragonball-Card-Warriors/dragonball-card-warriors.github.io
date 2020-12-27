const filterCards = () => {
  const filters = {};

  const defaultFilterFunction = (values, value) => !values.length || values.includes(value);
  filters.energy_cost = {
    values: [...document.getElementsByClassName('filter-energy')].filter(el => el.checked).map(el => el.value),
    function: defaultFilterFunction,
  };
  filters.type = {
    values: [...document.getElementsByClassName('filter-type')].filter(el => el.checked).map(el => el.value),
    function: defaultFilterFunction,
  };
  filters.icon = {
    values: [...document.getElementsByClassName('filter-icon')].filter(el => el.checked).map(el => el.value),
    function: defaultFilterFunction,
  };
  filters.rarity = {
    values: [...document.getElementsByClassName('filter-rarity')].filter(el => el.checked).map(el => el.value),
    function: defaultFilterFunction,
  };
  filters.abilities = {
    values: [...document.getElementsByClassName('filter-abilities')].filter(el => el.checked).map(el => el.value),
    function: defaultFilterFunction,
  };

  const attHPFilterFunction = (values, value) => !values.length || values.includes(value) || (values.includes('10000') && +value >= 10000);
  filters.attack = {
    values: [...document.getElementsByClassName('filter-attack')].filter(el => el.checked).map(el => el.value),
    function: attHPFilterFunction,
  };
  filters.hit_points = {
    values: [...document.getElementsByClassName('filter-hp')].filter(el => el.checked).map(el => el.value),
    function: attHPFilterFunction,
  };

  const cardElements = [...document.getElementsByClassName('card-item')];

  cardElements.forEach(el => {
    const shouldShow = Object.entries(filters).every(([key, filter]) => {
      const value = el.dataset[key];
      return filter.function(filter.values, el.dataset[key]);
    })
    // show the card, all filters passed
    return shouldShow ? showElement(el) : hideElement(el);
  });
}

const hideElement = (el) => {
  el.style.display = 'none';
}

const showElement = (el) => {
  el.style.display = 'block';
}
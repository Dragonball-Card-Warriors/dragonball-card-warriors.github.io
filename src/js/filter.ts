import { showElement, hideElement } from './display';

export const filterCards = (): void => {
  const filters: any = {};

  const defaultFilterFunction = (values, value): boolean => !values.length || values.includes(value);
  filters.energy_cost = {
    values: [...document.getElementsByClassName('filter-energy')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: defaultFilterFunction,
  };
  filters.type = {
    values: [...document.getElementsByClassName('filter-type')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: defaultFilterFunction,
  };
  filters.icon = {
    values: [...document.getElementsByClassName('filter-icon')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: defaultFilterFunction,
  };
  filters.rarity = {
    values: [...document.getElementsByClassName('filter-rarity')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: defaultFilterFunction,
  };

  const attHPFilterFunction = (values, value): boolean => !values.length || values.includes(value) || (values.includes('10000') && +value >= 10000);
  filters.attack = {
    values: [...document.getElementsByClassName('filter-attack')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: attHPFilterFunction,
  };
  filters.hit_points = {
    values: [...document.getElementsByClassName('filter-hp')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: attHPFilterFunction,
  };

  const splitFilterFunction = (values, value): boolean => !values.length || value.split(',').some(v => values.includes(v));
  filters.abilities = {
    values: [...document.getElementsByClassName('filter-abilities')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: splitFilterFunction,
  };
  filters.effectTypes = {
    values: [...document.getElementsByClassName('filter-effect-type')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: splitFilterFunction,
  };

  filters.groups = {
    values: [...document.getElementsByClassName('filter-groups')]
      .filter((el: HTMLInputElement) => el.checked)
      .map((el: HTMLInputElement) => el.value),
    function: splitFilterFunction,
  };

  const cardElements: HTMLElement[] = [...document.getElementsByClassName('card-item')] as HTMLElement[];

  cardElements.forEach((el: HTMLElement) => {
    const shouldShow = Object.keys(filters).every((key) => {
      const value = el.dataset[key];
      const filter = filters[key];
      return filter.function(filter.values, value);
    });
    // show the card, all filters passed
    return shouldShow ? showElement(el) : hideElement(el);
  });
};

export const toggleAllFilter = (filterName: string): void => {
  const els = [...document.getElementsByClassName(`filter-${filterName}`)];
  const checked = els.filter((el: HTMLInputElement) => el.checked).length;
  const check = checked <= (els.length / 2);
  els.forEach((el: HTMLInputElement) => el.checked = check);
  filterCards();
};

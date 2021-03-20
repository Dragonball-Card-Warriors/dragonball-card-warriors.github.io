import { rarityColor, CardType, cardList } from '../data/cards';
import { getCardEffectHTML } from './load';

let displayInfo = true;
export const toggleDisplay = (): void => {
  displayInfo = !displayInfo;
  const cardElements = [...document.getElementsByClassName('card-item')];

  cardElements.forEach(el => {
    const infoElements = [...el.getElementsByClassName('card-info')] as HTMLElement[];
    const imageElements = [...el.getElementsByClassName('card-image')] as HTMLElement[];
    if (displayInfo) {
      el.classList.replace('col-md-2', 'col-md-6');
      el.classList.replace('col-4', 'col-12');
      infoElements.forEach(showElement);
      imageElements.forEach(imageElement => imageElement.classList.replace('col-12', 'col-4'));
    } else {
      el.classList.replace('col-md-6', 'col-md-2');
      el.classList.replace('col-12', 'col-4');
      infoElements.forEach(hideElement);
      imageElements.forEach(imageElement => imageElement.classList.replace('col-4', 'col-12'));
    }
  });
};

export const updateCardInfoModal = (id: number): void => {
  const tableElement = document.getElementById('cardInfoModal').getElementsByTagName('table')[0] as HTMLElement;
  const directLink = document.getElementById('directLink') as HTMLAnchorElement;
  directLink.href = `${location.origin + location.pathname}?cardID=${id}`;
  const card = cardList.find(c => c.id == id);
  tableElement.innerHTML = `
    <thead>
      <tr>
        <th colspan="4"><img src="images/cards/${card.id}.png" alt="${card.name} card image" width="40%" onError="this.src = 'images/cards/none.png'"></th>
      </tr>
      <tr>
        <th colspan="4"><h5>${card.name}<h5><h6 class="text-muted">${card.sub_name}</h6></th>
      </tr>
    </thead>
    <tbody>
      ${card.type == 'Character' ? `
      <tr>
        <th width="25%" class="text-end">Groups:</th>
        <td width="75%" class="text-start" colspan="3">${card.groups.map(g => `<span class="badge bg-primary">${g}</span>`).join(' ')}</td>
      </tr>` : ''}
      <tr>
        <th width="25%" class="text-end">Rarity:</th>
        <td width="25%" class="text-start" style="color: ${rarityColor[card.rarity]}">${''.padStart(card.rarity, '✯')}</td>
        <th width="25%" class="text-end">Cost:</th>
        <td width="25%" class="text-start">${card.energy_cost}</td>
      </tr>
      ${card.type !== CardType.Event ? `
      <tr>
        <th width="25%" class="text-end">Attack:</th>
        <td width="25%" class="text-start">${card.attack || '-'}</td>
        <th width="25%" class="text-end">HP:</th>
        <td width="25%" class="text-start">${card.hit_points || '-'}</td>
      </tr>` : ''}
      ${card.abilities && card.abilities.length ? `
      <tr>
        <th width="25%" class="text-end">Ability:</th>
        <td width="75%" class="text-start" colspan="3">${card.abilities.map(a => `<img class="effect-icon" src="generator/images/effects/${a}.png"/> ${a}`).join(' ')}</td>
      </tr>` : ''}
      ${getCardEffectHTML(card.effects)}
    </tbody>`;
};

export const hideElement = (el: HTMLElement): void => {
  el.style.display = 'none';
};

export const showElement = (el: HTMLElement): void => {
  el.style.display = 'block';
};

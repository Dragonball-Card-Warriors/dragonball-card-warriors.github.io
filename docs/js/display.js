let displayInfo = true;
const toggleDisplay = () => {
  displayInfo = !displayInfo;
  const cardElements = [...document.getElementsByClassName('card-item')];

  cardElements.forEach(el => {
    infoElements = [...el.getElementsByClassName('card-info')];
    imageElements = [...el.getElementsByClassName('card-image')];
    if (displayInfo) {
      el.classList.replace('col-md-2', 'col-md-6');
      infoElements.forEach(showElement);
      imageElements.forEach(imageElement => imageElement.classList.replace('col-12', 'col-4'))
    } else {
      el.classList.replace('col-md-6', 'col-md-2');
      infoElements.forEach(hideElement);
      imageElements.forEach(imageElement => imageElement.classList.replace('col-4', 'col-12'))
    }
  });
}

updateCardInfoModal  = (id) => {
  const tableElement = document.getElementById('cardInfoModal').getElementsByTagName('table')[0];
  const directLink = document.getElementById('directLink');
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
      ${card.type == 'Character' ?
      `<tr>
        <th width="25%" class="text-end">Groups:</th>
        <td width="75%" class="text-start" colspan="3">${card.groups.map(g => `<span class="badge bg-info">${g}</span>`).join(' ')}</td>
      </tr>` : ''}
      <tr>
        <th width="25%" class="text-end">Rarity:</th>
        <td width="25%" class="text-start" style="color: ${rarityColor[card.rarity]}">${''.padStart(card.rarity, '✯')}</td>
        <th width="25%" class="text-end">Cost:</th>
        <td width="25%" class="text-start">${card.energy_cost}</td>
      </tr>
      ${card.type == 'Character' ?
      `<tr>
        <th width="25%" class="text-end">Attack:</th>
        <td width="25%" class="text-start">${card.attack || '-'}</td>
        <th width="25%" class="text-end">HP:</th>
        <td width="25%" class="text-start">${card.hit_points || '-'}</td>
      </tr>` : ''}
      ${card.abilities ?
      `<tr>
        <th width="25%" class="text-end">Ability:</th>
        <td width="75%" class="text-start" colspan="3">${card.abilities}</td>
      </tr>` : ''}
      ${card.effect ?
      `<tr>
        <th colspan="4">Effect:${card.trigger ? `<br/><i>[${card.trigger}]</i>` : ''}</th>
      </tr>
      <tr>
        <td colspan="4">${card.effect}</td>
      </tr>` : ''}
      ${card.requirements ?
      `<tr>
        <th colspan="4">Requirements:</th>
      </tr>
      <tr>
        <td colspan="4">${card.requirements}</td>
      </tr>` : ''}
    </tbody>`;
}
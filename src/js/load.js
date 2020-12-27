function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const cardContainer = document.getElementById('card-list');
cardList.forEach((card, i) => {
  const el = document.createElement("div");
  el.className = 'col-md-6 py-2';
  el.innerHTML = `<div class="card mb-3">
    <div class="row g-0 ">
      <div class="col-md-4 p-0 bg-secondary">
        <img src="images/cards/${i}.png" alt="${card.name} card image" width="100%" onError="this.src = 'images/cards/blank.png'">
      </div>
      <div class="col-md-8 pl-0">
        <table class="table" width="100%">
          <thead>
            <tr>
              <th colspan="4"><h5>${card.name}<h5><h6 class="text-muted">${card.sub_name}</h6></th>
            </tr>
          </thead>
          <tbody>
            ${card.type == 'Unit' ?
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
            ${card.type == 'Unit' ?
            `<tr>
              <th width="25%" class="text-end">Attack:</th>
              <td width="25%" class="text-start">${card.attack || '-'}</td>
              <th width="25%" class="text-end">HP:</th>
              <td width="25%" class="text-start">${card.hit_points || '-'}</td>
            </tr>` : ''}
            ${card.abilities ?
            `<tr>
              <th width="25%" class="text-end">Ability:</th>
              <td width="25%" class="text-start">${card.abilities}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
  setTimeout(() => cardContainer.appendChild(el), i * 10);
});
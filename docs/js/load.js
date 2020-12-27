const loadCards = (container) => {
  cardList.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'col-md-6 py-2 card-item';

    // Apply data attributes
    el.dataset.set = card.set
    el.dataset.name = card.name
    el.dataset.sub_name = card.sub_name
    el.dataset.groups = card.groups.join(', ');
    el.dataset.rarity = card.rarity
    el.dataset.energy_cost = card.energy_cost
    el.dataset.type = card.type
    el.dataset.icon = card.icon
    el.dataset.attack = card.attack
    el.dataset.hit_points = card.hit_points
    el.dataset.abilities = card.abilities
    el.dataset.effect = card.effect
    el.dataset.requirements = card.requirements
    el.dataset.trigger = card.trigger
    el.dataset.id = card.id

    // Add elements
    el.innerHTML = `<div class="card mb-3">
      <div class="row g-0 ">
        <div class="card-image col-4 p-0 bg-secondary">
          <img src="images/cards/${card.id}.png" alt="${card.name} card image" width="100%" onError="this.src = 'images/cards/none.png'">
        </div>
        <div class="card-info col-8 pl-0">
          <table class="table" width="100%">
            <thead>
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
    container.appendChild(el);
  });
};

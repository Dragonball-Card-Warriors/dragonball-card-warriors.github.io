import { updateCardInfoModal } from './display';
import { cardList } from '../data/cards';

export default class DeckManager {
  private selected = 0;
  private decks: Array<Deck> = [];
  private

  constructor() {
    this.load();
  }

  public load(): void {
    const savedDecks = JSON.parse(localStorage.decks || '[]');
    for (const deck of savedDecks) {
      console.log(deck);
      this.newDeck(deck);
    }
  }

  private save(): void {
    localStorage.decks = JSON.stringify(this.decks.filter(d => d.cards.size));
  }

  // non 0 indexed
  addDeckHtml(deck: Deck, index: number): void {
    const decksEl = document.getElementById('decks');
    // Update the HTML
    const deckEl = document.createElement('a');
    deckEl.href = `#deck-${index}`;
    deckEl.className = 'm-3 deck-select text-decoration-none';
    deckEl.onclick = () => this.viewDeck(index);

    // Temp until can edit image/name
    const firstCardID = [...deck.cards][0];
    const card = cardList.find(c => c.id == firstCardID) || {id: 'none', name: 'New Deck'};

    const image = document.createElement('img');
    image.src = `images/cards/${card.id}_thumb.png`;
    const br = document.createElement('br');
    const text = document.createElement('span');
    text.innerText = card.name;
    deckEl.appendChild(image);
    deckEl.appendChild(br);
    deckEl.appendChild(text);
    decksEl.appendChild(deckEl);
  }

  public newDeck(data = {}): void {
    // Load default options then add users deck
    const deckData = {
      ...{
        name: 'New Deck',
        image: 0,
        cards: [],
      },
      ...data,
    };
    const deck = new Deck(deckData.name, deckData.image, new Set(deckData.cards));

    this.decks.push(deck);
    this.addDeckHtml(deck, this.decks.length);

    // Save the decks
    this.save();
  }

  reloadDecks(): void {
    const decksEl = document.getElementById('decks');
    this.clearHTML(decksEl);

    // Update the HTML
    const newDeckEl = document.createElement('a');
    newDeckEl.href = '#new-deck';
    newDeckEl.className = 'm-3 deck-select text-decoration-none';
    newDeckEl.onclick = () => this.newDeck();
    const image = document.createElement('img');
    image.src = 'images/deck_new.png';
    const br = document.createElement('br');
    const text = document.createElement('span');
    text.innerText = 'Create New';
    newDeckEl.appendChild(image);
    newDeckEl.appendChild(br);
    newDeckEl.appendChild(text);
    decksEl.appendChild(newDeckEl);

    this.decks.forEach((deck, index) => {
      this.addDeckHtml(deck, index + 1);
    });
  }

  getSelectedDeck(): Deck {
    return this.decks[this.selected - 1];
  }

  addCardHtml(card: typeof cardList[0]): void {
    const deckCardsEl = document.getElementById('deck-cards');
    const cardEl = document.createElement('div');
    cardEl.className = 'm-2 card-select clickable';
    cardEl.dataset.card = card.id.toString();
    cardEl.setAttribute('data-bs-toggle', 'modal');
    cardEl.setAttribute('data-bs-target', '#cardInfoModal');
    cardEl.onclick = () => updateCardInfoModal(card.id);
    cardEl.oncontextmenu = (e) => {
      this.removeCard(card.id);
      e.preventDefault();
    };
    const image = document.createElement('img');
    image.src = `images/cards/${card.id}_thumb.png`;
    const br = document.createElement('br');
    const text = document.createElement('span');
    text.innerText = card.name;
    const br2 = document.createElement('br');
    const subtext = document.createElement('span');
    subtext.className = 'text-muted';
    subtext.innerText = card.sub_name;
    cardEl.appendChild(image);
    cardEl.appendChild(br);
    cardEl.appendChild(text);
    cardEl.appendChild(br2);
    cardEl.appendChild(subtext);
    deckCardsEl.appendChild(cardEl);
  }

  viewDeck(index: number): void {
    this.selected = index;
    document.getElementById('card-list').classList.add('deck-selected');
    const deck = this.getSelectedDeck();

    // Hide the deck list
    document.getElementById('decks').classList.remove('shown');

    // Update the HTML
    const deckCardsEl = document.getElementById('deck-cards');
    this.clearHTML(deckCardsEl);

    const backEl = document.createElement('div');
    backEl.className = 'm-2 card-select clickable';
    backEl.onclick = () => this.hideDeck();
    const backImage = document.createElement('img');
    backImage.src = 'images/deck.png';
    const backBr = document.createElement('br');
    const backText = document.createElement('span');
    backText.innerText = 'Back to decks';
    backEl.appendChild(backImage);
    backEl.appendChild(backBr);
    backEl.appendChild(backText);
    deckCardsEl.appendChild(backEl);

    deck.cards.forEach((cardID, index) => {
      const card = cardList.find(c => c.id == cardID);
      if (!card) {
        return;
      }
      this.addCardHtml(card);
    });

    setTimeout(() => {
      deckCardsEl.classList.add('shown');
    }, 500);
  }

  hideDeck(): void {
    this.selected = 0;
    document.getElementById('card-list').classList.remove('deck-selected');
    document.getElementById('deck-cards').classList.remove('shown');
    this.reloadDecks();
    setTimeout(() => {
      document.getElementById('decks').classList.add('shown');
    }, 500);
  }

  addCard(cardID: number): void {
    if (!this.selected || this.getSelectedDeck().cards.has(cardID)) {
      return;
    }
    this.getSelectedDeck()?.cards?.add(cardID);
    const card = cardList.find(c => c.id == cardID);
    this.addCardHtml(card);
    this.save();
  }

  removeCard(cardID: number): void {
    this.getSelectedDeck()?.cards?.delete(cardID);
    const cardsEl = document.getElementById('deck-cards')?.querySelector(`[data-card="${cardID}"]`)?.remove();
    this.save();
  }

  clearHTML(element: HTMLElement): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

export class Deck {
  constructor(
    public name: string,
    public image: number,
    public cards: Set<number>
  ) {}

  toJSON(): any {
    return {
      name: this.name,
      image: this.image,
      cards: [...this.cards],
    };
  }
}

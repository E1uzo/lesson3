import Element from "../constructor/Element.js";

const cardData = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
];

const newCardData = [
  'New 1',
  'New 2',
  'New 3',
];

const cards = cardData.map(el => new Element('div', 'card', el).get());
const oldCardsContainer = new Element('div', 'content-column', cards).get();

const newCards = newCardData.map(el => new Element('div', 'card card-small', el).get());
const newCardsContainer = new Element('div', 'content-column', newCards).get();

const content = new Element('div', 'content', [oldCardsContainer, newCardsContainer]);

export default content;

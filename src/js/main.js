import { initSite } from './site.js';
import { randomFact } from './printerFacts.js';

initSite();
showRandomFact();

function showRandomFact() {
  const fact = randomFact();
  document.querySelector('.printer-fact-label').textContent =
    `Printer fact No. ${fact.number}`;
  document.querySelector('.printer-fact-text').textContent = fact.text;
}

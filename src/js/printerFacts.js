import factsText from '../data/printer-facts.txt?raw';

const facts = factsText.split('\n').filter((line) => line.trim() !== '');

// Fact numbers are line numbers in printer-facts.txt, so keep the file free of blank lines.
export function randomFact() {
  const index = Math.floor(Math.random() * facts.length);
  return { number: index + 1, text: facts[index] };
}

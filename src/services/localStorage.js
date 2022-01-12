export function setStorageName(names) {
  localStorage.setItem('name', JSON.stringify(names));
}

export function getStorageName() {
  return JSON.parse(localStorage.getItem('name'));
}

export function setStorageCards(cards) {
  const localStorageData = localStorage.getItem('cards');
  const parseStorageData = JSON.parse(localStorageData);

  if (localStorageData === null) {
    return localStorage.setItem('cards', JSON.stringify([cards]));
  }
  return (
    localStorage.setItem('cards', JSON.stringify([
      ...parseStorageData, cards,
    ]))
  );
}

export function removeStorageCard(cards) {
  const localStorageData = localStorage.getItem('cards');
  const parseStorageData = JSON.parse(localStorageData);

  if (parseStorageData.length > 1) {
    localStorage.setItem('cards', JSON.stringify([cards]));
  } else {
    localStorage.removeItem('cards');
  }
}

export function getStorageCards() {
  const localStorageData = JSON.parse(localStorage.getItem('cards'));
  return localStorageData;
}

export function setStorageTrunfo(superTrunfo) {
  localStorage.setItem('trunfo', superTrunfo);
}

export function getStorageTrunfo() {
  return localStorage.getItem('trunfo');
}

export function saveDeck(deck) {
  localStorage.setItem('saveDeck', JSON.stringify(deck));
}

export function getDeck() {
  return JSON.parse(localStorage.getItem('saveDeck'));
}

export function saveStorageDeckInfos(infos) {
  localStorage.setItem('infos', JSON.stringify(infos));
}

export function getStorageDeckInfos() {
  return JSON.parse(localStorage.getItem('infos'));
}

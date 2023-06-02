export default class Section {
  constructor(renderer, listSelector) {
    this._list = document.querySelector(listSelector);
    this._renderer = renderer;
  }

 renderItems(cardData) {
    cardData.forEach(item => {
      this._renderer(item);
    });
  }

  addItemPrepend(DOMElement) {
    this._list.prepend(DOMElement);
  }

  addItemAppend(DOMElement) {
    this._list.append(DOMElement);
  }
}
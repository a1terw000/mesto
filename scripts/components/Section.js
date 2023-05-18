export default class Section {
  constructor({ items, renderer }, listSelector) {
    this._list = document.querySelector(listSelector);
    this._items = items;
    this._renderer = renderer;
  }

 renderItems() {
    this._items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(card) {
    this._list.prepend(this._renderer(card));
  }
}
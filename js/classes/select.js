export default class Select {
  constructor(label, nameSelect, classItem, selectItem) {
    this._label = label;
    this._nameSelect = nameSelect;
    this._classItem = classItem;
    this._selectItem = selectItem;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.insertAdjacentHTML( 'beforeend', this._label);
    const selectElem = document.createElement('select');
    selectElem.setAttribute( 'name', `${this._nameSelect}`);
    const selectItemHTML = this._selectItem.map(item => `<option class="${this._classItem}" 
                           value="${item}">${item}</option>`).join('');
    selectElem.insertAdjacentHTML('beforeend', selectItemHTML);
    this.elem.append(selectElem);
    return this.elem;
  }
}

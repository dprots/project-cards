export default class Select {
  constructor(label, nameSelect, idSelect, classItem, selectItem) {
    this._label = label;
    this._nameSelect = nameSelect;
    this._idSelect = idSelect;
    this._classItem = classItem;
    this._selectItem = selectItem;
    this.elem = null;
  }

  render() {
    debugger
    this.elem = document.createElement('div');
    this.elem.insertAdjacentHTML( 'beforeend', this._label);
    const selectElem = document.createElement('select');
    selectElem.id =this._idSelect;
    selectElem.setAttribute( 'name', `${this._nameSelect}`);
    const selectItemHTML = this._selectItem.map(item => `<option class="${this._classItem}">${item}</option>`).join('');
    selectElem.insertAdjacentHTML('beforeend', selectItemHTML);
    this.elem.append(selectElem);
    return this.elem;
  }
}

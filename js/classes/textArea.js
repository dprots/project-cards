export default class TextArea {
  constructor(classList, col, row, placeholder) {
    this._classList = classList;
    this._col = col;
    this._row= row;
    this._placeholder = placeholder || '';
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `<textarea class=${this._classList} cols=${this._col} rows=${this._row} name='comments' placeholder=${this._placeholder}>`;
    return this.elem;
  }
}
export default class Modal {
  constructor (classList) {
    this._classList = classList;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList = this._classList;
    return this.elem;
  }
}
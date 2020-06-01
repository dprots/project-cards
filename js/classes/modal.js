export default class Modal {
  constructor (id, classList, modalContent) {
    this._id = id;
    this._classList = classList;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList = this._classList;
    this.elem.id = this._id;
    return this.elem;
  }

  openModal() {
    this.elem.classList.add("active");
  }

  closeModal() {
    this.elem.classList.remove("active");
  }
}
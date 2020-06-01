export default class Input {
  constructor(type, name, placeholder, req = true) {
    this._type = type;
    this._name = name;
    this._placeholder = placeholder;
    this._reg = (req) ? 'required' : '';
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `<input type=${this._type} name=${this._name} placeholder=${this._placeholder} ${this._reg}>`;
    return this.elem;
  }
}
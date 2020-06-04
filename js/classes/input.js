export default class Input {
  constructor(type, name, value, placeholder, req) {
    this._type = type;
    this._name = name || '';
    this._value = value || '';
    this._placeholder = placeholder || '';
    this._req = req || '';
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('input');
    this.elem.setAttribute('type', `${this._type}`);

    if (this._name) {
      this.elem.setAttribute('name', `${this._name}`)
    }

    if (this._value) {
      this.elem.setAttribute('value', `${this._value}`)
    }

    if (this._placeholder) {
      this.elem.setAttribute('placeholder', `${this._placeholder}`)
    }

    if (this._req) {
      this.elem.setAttribute( 'required', '');
    }
    return this.elem;
  }
}
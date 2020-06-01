export default class Form {
  constructor(actionForm = '', idForm, classesForm, inputList){
    this._action = actionForm;
    this._idForm = idForm;
    this._classesForm = classesForm;
    this._inputList = inputList;
    this.elem = null;
  }

  render () {
    this.elem = document.createElement('form');
    this.elem.classList = this._classesForm;
    this.elem.id = this._idForm;
    this.elem.action = this._action;
    this.elem.insertAdjacentHTML('beforeEnd', this._inputList);
    return this.elem;
  }

  handleSubmit() {

  }

  serializeJSON() {

  }
}

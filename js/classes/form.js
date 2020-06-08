import {Input} from './index.js';
import {render} from '../functions/index.js';

export default class Form {
  constructor(actionForm = '', idForm, classesForm, buttons){
    this._action = actionForm;
    this._idForm = idForm;
    this._classesForm = classesForm;
    this._buttons = buttons;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('form');
    this.elem.classList = this._classesForm;
    this.elem.id = this._idForm;
    this.elem.action = this._action;
    const fieldSet = document.createElement('fieldset');
    fieldSet.classList.add('form-fieldset');
    this.elem.append(fieldSet);
    for (const [key, value] of Object.entries(this._buttons)) {
      const button = new Input (`${key}`, 'button', '',`${value}`);
      render(button, this.elem);
    }
    return this.elem;
  }

  serialize() {
    const inputsName = this.elem.querySelectorAll('[name]');
    const body = {};
      inputsName.forEach(item => {
        body[item.name] = item.value
      });
    return body;
  }
}

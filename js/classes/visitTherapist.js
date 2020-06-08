import Visit from "./visit.js";

export default class VisitTherapist extends Visit {
  constructor(age, ...args) {
    super(...args);
    this._age = age;
  }

  render(place) {
    super.render(place);
    this.elem = `<p>Age: <span>${this._age}</span></p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
  }
}
import Visit from "./visit.js";

export default class VisitDentist extends Visit {
  constructor(dataLastVisit, ...args) {
    super(...args);
    this._dataLastVisit = dataLastVisit;
  }

  render(place) {
    super.render(place);
    this.elem = `<p>Date of past visit: ${this._dataLastVisit}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
  }
}
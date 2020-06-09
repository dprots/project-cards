import Visit from "./visit.js";

export default class VisitCardiologist extends Visit {
  constructor(age, diseases, massIndex, pressure,  ...args) {
    super(...args);
    this._pressure = pressure;
    this._massIndex = massIndex;
    this._diseases = diseases;
    this._age = age;
  }

  render(place) {
    super.render(place);
    this.elem = `<p>Blood pressure: <span>${this._pressure}</span></p><p>Mass index: <span>${this._massIndex}</span></p>
                 <p>Diseases: <span>${this._diseases}</span></p><p>Age: <span>${this._age}</span></p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
  }
}
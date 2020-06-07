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
    this.elem = `<p>Blood pressure: ${this._pressure}</p><p>Mass index: ${this._massIndex}</p>
                 <p>Diseases: ${this._diseases}</p><p>Age: ${this._age}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
  }
}
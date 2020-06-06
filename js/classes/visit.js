export default class Visit {
  constructor(id, doctor, status, name, surname, purposeVisit, urgency, comments, ...arg) {
    this._id = id;
    this._doctor = doctor;
    this._status = status;
    this._name = name;
    this._surname = surname;
    this._purposeVisit = purposeVisit;
    this._urgency = urgency;
    this._comments = comments;
    this._hiddenPlace = null;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('card-visit');
    this.elem.setAttribute('data-id', `${this._id}`);
    this.elem.setAttribute('draggable', true);
    this.elem.insertAdjacentHTML('beforeend', `<p class="card-status">Status: ${this._status}</p></p><p>Name: ${this._name}</p><p>Surname: ${this._surname}</p><p>Doctor: ${this._doctor}
                                  </p><span class="delete-icon">X</span><button class="btn-show active">Show more</button>`);
    this._hiddenPlace = document.createElement('div');
    this._hiddenPlace.classList.add('hidden-place');
    this.elem.append(this._hiddenPlace);
    const cardContent = `<p>${this._purposeVisit}</p><p>${this._urgency}</p><p>${this._comments}</p>`;
    this._hiddenPlace.innerHTML = cardContent;
    return this.elem;
  }
}

export class VisitCardiologist extends Visit{
  constructor(pressure, massIndex, diseases, age, ...args) {
    super(...args);
    this._pressure = pressure;
    this._massIndex = massIndex;
    this._diseases = diseases;
    this._age = age;
    // this.elem = null;
  }

  render() {
    super.render();
    this.elem = `<p>Blood pressure${this._pressure}</p><p>Mass index: ${this._massIndex}</p><p>Diseases: ${this._diseases}</p><p>Age: ${this._age}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
    // return this.elem;
  }
}

export class VisitDentist extends Visit {
  constructor(dataLastVisit, ...args) {
    super(...args);
    this._dataLastVisit = dataLastVisit;
    // this.elem = null;
  }

  render() {
    super.render();
    this.elem = `<p>${this._dataLastVisit}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
    // return this.elem;
  }
}

export class VisitTherapist extends Visit{
  constructor(age, ...args) {
    super(...args);
    this._age = age;
    // this.elem = null;
  }

  render() {
    super.render();
    this.elem = `<p>${this._age}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
    // return this.elem;
  }
}
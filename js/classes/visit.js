export default class Visit {
  constructor(doctor, name, surname, purposeVisit, urgency, comments) {
    this._doctor = doctor;
    this._name = name;
    this._surname = surname;
    this._purposeVisit = purposeVisit;
    this._urgency = urgency;
    this._comments = comments;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('card-visit');
    this.elem.insertAdjacentHTML('beforeend', `<p>${this._name}</p><p>${this._surname}</p><p>${this._doctor}
                                  </p><button class="btn-show active">Show more</button>`);
    const hiddenPlace = document.createElement('div');
    hiddenPlace.classList.add('hidden-place');
    this.elem.append(hiddenPlace);
    const cardContent = `<p>${this._purposeVisit}</p><p>${this._urgency}</p><p>${this._comments}</p>`;
    hiddenPlace.innerHTML = cardContent;
    return this.elem;
  }
}

class VisitCardiologist extends Visit{
  constructor(pressure, massIndex, diseases, age, ...args) {
    super(...args);
    this._pressure = pressure;
    this._massIndex = massIndex;
    this._pressure = diseases;
    this._pressure = age;
    this.elem = null;
  }

  render() {
    super.render();
  }
}

class VisitDentist extends Visit {
  constructor(dataLastVisit, ...args) {
    super(...args);
    this._dataLastVisit = dataLastVisit;
    this.elem = null;
  }

  render() {
    super.render();
  }
}

class VisitTherapist extends Visit{
  constructor(age, ...args) {
    super(...args);
    this._age = age;
    this.elem = null;
  }

  render() {
    super.render();
  }
}
export default class Visit {
  constructor(name, surname, purposeVisit, urgency, comments, ...args) {
    this._name = name;
    this._surname = surname;
    this._purposeVisit = purposeVisit;
    this._urgency = urgency;
    this._comments = comments;
    this._doctor = args[args.length-2];
    this._id = args[args.length-1];
    this._hiddenPlace = null;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('card-visit');
    this.elem.setAttribute('data-id', `${this._id}`);
    this.elem.insertAdjacentHTML('beforeend', `<p>${this._name}</p><p>${this._surname}</p><p>${this._doctor}
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
    this.elem = null;
  }

  render() {
    super.render();
    this.elem = `<p>${this._pressure}</p><p>${this._massIndex}</p><p>${this._diseases}</p><p>${this._age}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
    return this.elem;
  }
}

export class VisitDentist extends Visit {
  constructor(dataLastVisit, ...args) {
    super(...args);
    this._dataLastVisit = dataLastVisit;
    this.elem = null;
  }

  render() {
    super.render();
    this.elem = `<p>${this._dataLastVisit}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
    return this.elem;
  }
}

export class VisitTherapist extends Visit{
  constructor(age, ...args) {
    super(...args);
    this._age = age;
    this.elem = null;
  }

  render() {
    super.render();
    this.elem = `<p>${this._age}</p>`;
    this._hiddenPlace.insertAdjacentHTML('beforeend', this.elem);
    return this.elem;
  }
}
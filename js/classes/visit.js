export default class Visit {
  constructor(comments, urgency, purposeVisit, surname, name, id, doctor, status) {
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

  render(place) {
    this.elem = document.createElement('div');
    this.elem.classList.add('card-visit');
    this.elem.setAttribute('data-id', `${this._id}`);
    this.elem.setAttribute('draggable', true);
    this.elem.insertAdjacentHTML('beforeend', `<p class="card-status">Status: ${this._status}</p>
                    <p>Name: ${this._name}</p><p>Surname: ${this._surname}</p><p>Doctor: ${this._doctor}</p>
                    <span class="delete-icon">&times;</span><button class="btn-show active">Show more</button>`);
    this._hiddenPlace = document.createElement('div');
    this._hiddenPlace.classList.add('hidden-place');
    this.elem.append(this._hiddenPlace);
    const moreInfo = `<p>Purpose of visit: ${this._purposeVisit}</p><p>Urgency: ${this._urgency}</p>
                    <p>Comments: ${this._comments}</p>`;
    this._hiddenPlace.innerHTML = moreInfo;
    place.append(this.elem);
  }
}

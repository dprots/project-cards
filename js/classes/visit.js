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
    this.elem.insertAdjacentHTML('beforeend', `<p class="card-status">Status: <span>${this._status}</span></p>
                    <p class="card-title">Visit № ${this._id}</p>
                    <p>Name: <span>${this._name}</span></p><p>Surname: <span>${this._surname}</span></p><p>Doctor: <span>${this._doctor}</span></p>
                    <p class="delete-icon">&times;</p><button class="btn-show active">Show more</button>`);
    this._hiddenPlace = document.createElement('div');
    this._hiddenPlace.classList.add('hidden-place');
    this.elem.append(this._hiddenPlace);
    const moreInfo = `<p>Purpose of visit: <span>${this._purposeVisit}</span></p><p>Urgency: <span>${this._urgency}</span></p>
                      <p>Comments: <span>${this._comments}</span></p>`;
    this._hiddenPlace.innerHTML = moreInfo;
    place.append(this.elem);
  }
}

export default class Visit {
  constructor(purpose, comments, urgency, name, surname) {
  }
}

class VisitCardiologist extends Visit{
  constructor(pressure, massIndex, pastIllness, age, ...args) {
    super(...args);
  }
}

class VisitDentist extends Visit {
  constructor(dataLastVisit, ...args) {
    super(...args);
  }
}

class VisitTherapist extends Visit{
  constructor(age, ...args) {
    super(...args);
  }
}
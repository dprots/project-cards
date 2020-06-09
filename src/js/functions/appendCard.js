import {VisitCardiologist, VisitDentist, VisitTherapist} from '../classes'

export function appendCard(dataVisit) {
  let visitCard;
  document.querySelector('.board-empty').classList.remove('active');
  const {id, doctor, status, content} = dataVisit;
  const dataArg = Object.values(content).reverse();

  if (doctor === 'Cardiologist') visitCard = new VisitCardiologist(...dataArg, id, doctor, status);
  if (doctor === 'Dentist') visitCard = new VisitDentist(...dataArg, id, doctor, status);
  if (doctor === 'Therapist') visitCard = new VisitTherapist(...dataArg, id, doctor, status);

  visitCard.render(document.querySelector('#visit-container'));
}
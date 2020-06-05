import {render} from '../functions';
import {VisitCardiologist, VisitDentist, VisitTherapist} from '../classes'

export function appendCard(dataVisit) {
  let visitCard;
  document.querySelector('.board-empty').classList.remove('active');
  const dataArg = Object.values(dataVisit);

  if (dataVisit.doctor === 'Cardiologist') visitCard = new VisitCardiologist(...dataArg);
  if (dataVisit.doctor === 'Dentist') visitCard = new VisitDentist(...dataArg);
  if (dataVisit.doctor === 'Therapist') visitCard = new VisitTherapist(...dataArg);

  render(visitCard, document.querySelector('#visit-container'))
}
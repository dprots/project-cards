import {render} from '../functions';
import {VisitCardiologist, VisitDentist, VisitTherapist} from '../classes'

export function appendCard(dataVisit) {
  let visitCard;
  document.querySelector('.board-empty').classList.remove('active');
  const dataArg = Object.values(dataVisit.content);

  if (dataVisit.doctor === 'Cardiologist') visitCard = new VisitCardiologist(dataVisit.id, dataVisit.doctor, dataVisit.status, ...dataArg);
  if (dataVisit.doctor === 'Dentist') visitCard = new VisitDentist(dataVisit.id, dataVisit.doctor, dataVisit.status, ...dataArg);
  if (dataVisit.doctor === 'Therapist') visitCard = new VisitTherapist(dataVisit.id, dataVisit.doctor, dataVisit.status, ...dataArg);

  render(visitCard, document.querySelector('#visit-container'))
}
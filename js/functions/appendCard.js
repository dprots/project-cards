import {render} from '../functions';
import {Visit} from '../classes'

export function appendCard(dataVisit) {
  document.querySelector('.board-empty').classList.remove('active');
  const dataArg = Object.values(dataVisit);
  const visitCard = new Visit(...dataArg);
  render(visitCard, document.querySelector('#visit-container'))

}
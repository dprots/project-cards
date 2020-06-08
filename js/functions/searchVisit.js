import {Form, Select, Input} from '../classes/index.js';
import {axiosRequest, render,appendCard} from './index.js';

export function searchVisit() {
  const formSearch = new Form ('', 'form-search-visit', 'form', {reset: 'Show all'});
  render(formSearch, document.getElementById('search-visit'));
  const fieldContainer = formSearch.elem.querySelector('.form-fieldset');
  const inputSearch = new Input ('text','search', '', 'Search parameter');
  const selectStatus = new Select('Status: ', 'status', 'select-item', ['Open', 'Done']);
  const selectUrgency = new Select('Urgency: ','urgency', 'select-item', ['High', 'Normal', 'Low']);

  render(inputSearch, fieldContainer);
  render(selectStatus, fieldContainer);
  render(selectUrgency, fieldContainer);

  document.querySelector('[name="search"]').oninput = function() {
    filterVisit();
  };

  formSearch.elem.onchange = function() {
    filterVisit();
  };

  formSearch.elem.querySelector('[type="reset"]').onclick = function() {
    formSearch.elem.reset();
    filterVisit();
  };

  async function filterVisit() {
    const cards = document.querySelectorAll('.board > div');
    cards.forEach(elem => elem.remove());
    document.querySelector('.board-empty').classList.add('active');
    const {search, status, urgency} = formSearch.serialize();
    const dataVisit = await axiosRequest('GET', 'cards');
    dataVisit.forEach(item => {
      if ((search === ''
          || item.doctor.includes(search)
          || item.content.name.includes(search)
          || item.content.surname.includes(search)
          || item.content.purposeVisit.includes(search))
          && (status === 'etc' || item.status === status)
          && (urgency === 'etc' || item.content.urgency === urgency)) {
        appendCard(item)
      }
    })
  }
}
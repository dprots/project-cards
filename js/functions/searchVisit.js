import {Form, Select, Input} from '../classes';
import {axiosRequest, render,appendCard} from '../functions';

export function searchVisit() {
  const formSearch = new Form ('', 'form-search-visit', 'form', {submit: 'Search'});
  render(formSearch, document.getElementById('search-visit'));
  const fieldContainer = formSearch.elem.querySelector('.form-fieldset');
  const inputSearch = new Input ('text','search-visit', '', 'Search parameter', 'required');
  const selectStatus = new Select('Status: ', 'select-status', 'select-item', ['Open', 'Done']);
  const selectUrgency = new Select('Urgency: ','select-urgency', 'select-item', ['High', 'Normal', 'Low']);

  render(inputSearch, fieldContainer);
  render(selectStatus, fieldContainer);
  render(selectUrgency, fieldContainer);

  formSearch.elem.addEventListener('submit', async function (e) {
    e.preventDefault();
    const cards = document.querySelectorAll('.board > div');
    cards.forEach(elem => elem.remove());
    const body = formSearch.serialize();
    const dataVisit = await axiosRequest('GET', 'cards');
    dataVisit.forEach(item => {
      debugger
      appendCard(item)
    })
  })
}
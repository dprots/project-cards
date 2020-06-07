import {Form, Select, Input} from '../classes';
import {axiosRequest, render,appendCard} from '../functions';

export function searchVisit() {
  const formSearch = new Form ('', 'form-search-visit', 'form', {submit: 'Search'});
  render(formSearch, document.getElementById('search-visit'));
  const fieldContainer = formSearch.elem.querySelector('.form-fieldset');
  const inputSearch = new Input ('text','search', '', 'Search parameter');
  const selectStatus = new Select('Status: ', 'status', 'select-item', ['Open', 'Done']);
  const selectUrgency = new Select('Urgency: ','urgency', 'select-item', ['High', 'Normal', 'Low']);

  render(inputSearch, fieldContainer);
  render(selectStatus, fieldContainer);
  render(selectUrgency, fieldContainer);

  formSearch.elem.addEventListener('submit', async function (e) {
    e.preventDefault();
    const cards = document.querySelectorAll('.board > div');
    cards.forEach(elem => elem.remove());
    document.querySelector('.board-empty').classList.add('active');
    const {search, status, urgency} = formSearch.serialize();
    const dataVisit = await axiosRequest('GET', 'cards');
    dataVisit.forEach(item => {
      if ((status === 'etc' || item.status === status) && (urgency === 'etc' || item.content.urgency === urgency)) {
        appendCard(item)
      }
    })
  })
}
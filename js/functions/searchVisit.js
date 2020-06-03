import {Form, Select, Input} from '../classes';
import {render} from "../functions";

export function searchVisit() {
  const formSearch = new Form ('', 'form-search-visit', 'form');
  render(formSearch, document.getElementById('search-visit'));
  const inputSearch = new Input ('text','search-visit', '', 'Search parameter', 'required');
  const selectStatus = new Select('Status: ','select-status', 'select-status', 'select-item', ['Open', 'Done']);
  const selectUrgency = new Select('Urgency: ','select-urgency', 'select-urgency', 'select-item', ['High', 'Normal', 'Low']);
  const searchButton = new Input ('submit', '', 'Search', 'Search');
  render(inputSearch, formSearch.elem);
  render(selectStatus, formSearch.elem);
  render(selectUrgency, formSearch.elem);
  render(searchButton, formSearch.elem);

}
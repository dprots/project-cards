import {axiosRequest} from './axiosRequest.js';
import {Modal} from '../classes';

export async function editCard (elem) {
  const modalEdit = new Modal('modal', 'Edit');
  render(modalEdit, document.getElementById('root'));
  const {data} = await axiosRequest('PUT', `cards/${elem.dataset.id}`);

    if (data.status === 'Success') {

    } else {
      alert('Error, try again');
    }
}
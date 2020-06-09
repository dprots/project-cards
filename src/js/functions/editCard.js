import {axiosRequest} from './axiosRequest.js';
import {Form} from '../classes';
import {render} from './render.js';

export async function editCard (elem) {
  //Очищаем содержимое карточки


  // Меняем содержимое карточки на форму со значениями, нужно добавить поле Status

  const formEdit = new Form('', 'form-edit', 'form', {submit: 'Save', reset: 'Cancel'});


  render(formEdit, "Контейнер карточки");


//Готовим боди запроса
  const bodyEdit = formEdit.serialize();

  const {data} = await axiosRequest('PUT', `cards/${elem.dataset.id}`, bodyEdit);

    if (data.id) {
//Выводим измененную карточку
    } else {
      alert('Error, try again');
    }
}
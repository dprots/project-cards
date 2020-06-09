import {axiosRequest, createVisit, loginUser, deleteCard, showCards} from './functions';
import {DragAndDrop} from './classes';

// for (let i=7575; i < 7650; i++) {
//   axiosRequest('DELETE', `cards/7652`);
// }

document.addEventListener('click', function (e) {

  if (e.target.id === 'btn-login') loginUser();

  if (e.target.id === 'btn-create') createVisit();

  if (e.target.classList.contains('btn-show')) {
    e.target.classList.remove('active');
    e.target.nextSibling.classList.add('active');
  }

  if (e.target.classList.contains('delete-icon')) deleteCard(e.target.parentNode);

  if (e.target.classList.contains('edit-icon')) editCard(e.target.parentNode);
});

document.getElementById('visit-container').addEventListener("dragstart", function (e) {
  new DragAndDrop(e.target);
});

showCards();

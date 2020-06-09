import {createVisit, loginUser, deleteCard, editCard, showCards} from './functions';
import {DragAndDrop} from './classes';

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

document.querySelector('#visit-container').addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('card-visit')) {
    e.target.ondragstart = () => false;
    new DragAndDrop(e.target);
  }
});

showCards();

import {createVisit, loginUser} from './functions/index.js';

document.addEventListener('click', function (e) {
  if (e.target.id === 'btn-login') loginUser();
  if (e.target.id === 'btn-create') createVisit();
  if (e.target.classList.contains('btn-show')) {
    e.target.classList.remove('active');
    e.target.nextSibling.classList.add('active');
  }
});



import {createVisit, getRequest, loginUser, searchVisit, serializeJSON, showMore} from './functions/index.js';
import {Card, Form, Input, Modal, Select, Visit} from './classes/index.js';

// class EnterForm extends Form {
//   constructor(...args) {
//     super(...args);
//   }
//
// }

const buttonOpenLogin = document.getElementById('enter-btn');
const modalEnter = new Modal('enter-modal', 'modal');
render(modalEnter, document.getElementById('root'));
const enterForm = new Form ('', 'enter-form', 'enter-form',
      `<input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <input type="submit" value="Enter">
                <input type="reset" value="Cancel">`);
render(enterForm, document.getElementById('enter-modal'));
buttonOpenLogin.addEventListener("click",   modalEnter.openModal.bind(modalEnter));

document.getElementById('enter-form').addEventListener('submit', submitLogin);

function submitLogin (e) {
  e.preventDefault();
  const userEmail = this.querySelector('[name=email]').value;
  const userPassword = this.querySelector('[name=password]').value;
  loginUser(userEmail, userPassword)
}


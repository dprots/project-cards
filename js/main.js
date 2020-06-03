import {createVisit, getRequest, loginUser, render, searchVisit, serializeJSON, showMore} from './functions/index.js';
import {Card, Form, Input, Modal, Select, Visit} from './classes/index.js';

// class EnterForm extends Form {
//   constructor(...args) {
//     super(...args);
//   }
//
// }
const buttonOpenLogin = document.getElementById('btn-login');
const buttonCreateVisit = document.getElementById('btn-create');

buttonOpenLogin.addEventListener("click", loginUser);
buttonCreateVisit.addEventListener("click", createVisit);



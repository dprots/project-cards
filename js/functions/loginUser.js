import {Form, Input, Modal} from '../classes';
import {axiosRequest, render, showCards} from '../functions';

export function loginUser() {
  const modalLogin = new Modal('modal');
  render(modalLogin, document.getElementById('root'));
  const formLogin = new Form('', 'form-login', 'form', {submit: 'Enter', reset: 'Cancel'});
  render(formLogin, modalLogin.elem);
  const fieldContainer = formLogin.elem.querySelector('.form-fieldset');
  const inputEmail = new Input('email', 'email', null, 'Email', 'required');
  const inputPassword = new Input('password', 'password', '', 'Password', 'required');

  render(inputEmail, fieldContainer);
  render(inputPassword, fieldContainer);

  modalLogin.close();

  formLogin.elem.addEventListener('submit', async function(e) {
    e.preventDefault();
    const body = formLogin.serialize();
    modalLogin.elem.remove();
    const respData = await axiosRequest('POST', 'login', body);

    if (respData.status === 'Success') {
      localStorage.clear();
      localStorage.setItem('token', respData.token);
      document.cookie = 'authorized = true; Max-Age = 1500';
      document.getElementById('btn-login').classList.remove('active');
      document.getElementById('btn-create').classList.add('active');
      showCards();
    } else {
      alert(respData.message)
    }
  });
}



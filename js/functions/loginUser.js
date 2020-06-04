import {Form, Input, Modal} from '../classes';
import {axiosRequest, render, searchVisit} from '../functions';

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

  formLogin.elem.addEventListener('submit', async function(e) {
    e.preventDefault();
    localStorage.clear();
    const body = formLogin.serialize();
    modalLogin.elem.remove();
    const respData = await axiosRequest('POST', 'login', body);

    if (respData.status === 'Success') {
      localStorage.setItem('token', respData.token);
      document.getElementById('btn-login').classList.remove('active');
      document.getElementById('btn-create').classList.add('active');
      searchVisit();
    } else {
      alert(respData.message)
    }
  });

  modalLogin.elem.addEventListener('click', function(e) {
    // debugger
    // if (!!(e.target.id != 'btn-login' & !e.target.closest('.form-login'))) {
    //   modalLogin.closeModal()
    // }
    if (e.target === this.querySelector('[type="reset"]')) {
      modalLogin.elem.remove()
    }

  })
}



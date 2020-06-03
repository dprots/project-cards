import {Form, Input, Modal} from "../classes";
import {render, searchVisit, submitLogin} from "../functions";

export function loginUser() {
  const modalLogin = new Modal('modal-login', 'modal');
  render(modalLogin, document.getElementById('root'));
  const formLogin = new Form('', 'form-login', 'form');
  render(formLogin, modalLogin.elem);
  const inputEmail = new Input('email', 'email', '', 'Email', 'required');
  const inputPassword = new Input('password', 'password', '', 'Password', 'required');
  const inputSubmit = new Input('submit', 'submitForm', 'Enter', '');
  const inputReset = new Input('reset', 'resetForm', 'Cancel', '');
  render(inputEmail, formLogin.elem);
  render(inputPassword, formLogin.elem);
  render(inputSubmit, formLogin.elem);
  render(inputReset, formLogin.elem);
  modalLogin.openModal();

  document.getElementById('form-login').addEventListener('submit', async function(e) {
    e.preventDefault();
    const userEmail = this.querySelector('[name=email]').value;
    const userPassword = this.querySelector('[name=password]').value;
    localStorage.clear();
    modalLogin.elem.remove();
    const {data} = await axios.post('http://cards.danit.com.ua/login', {
      email: userEmail,
      password: userPassword
    });
    if (data.status === 'Success') {
      localStorage.setItem('token', data.token);
      document.getElementById('btn-login').classList.remove('active');
      document.getElementById('btn-create').classList.add('active');
      searchVisit();
      alert ('Login successful');
    } else {
      alert(data.message)
    }
  });

  modalLogin.elem.addEventListener('click', function(e) {
    // debugger
    // if (!!(e.target.id != 'btn-login' & !e.target.closest('.form-login'))) {
    //   modalLogin.closeModal()
    // }
    if (e.target === inputReset.elem) {
      modalLogin.closeModal()
    }

  })
}



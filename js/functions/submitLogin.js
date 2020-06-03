export function submitLogin (e) {
  debugger
  e.preventDefault();
  const userEmail = this.querySelector('[name=email]').value;
  const userPassword = this.querySelector('[name=password]').value;
  const req = loginRequest(userEmail, userPassword);
  alert ('Login success');
  localStorage.setItem('token', req.data.token);
  document.getElementById('modal-login').closeModal();
}